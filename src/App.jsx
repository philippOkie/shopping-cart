import { useState, useEffect } from 'react'

import ProductCard from "./ProductCard";
import './App.css'

const BASE_URL = 'https://fakestoreapi.com' // process.env.REACT_APP_BASE_URL;

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchProducts = (title) => {
    const filtered = products.filter(movie =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );

    setFilteredProducts(filtered.sort((a, b) => a.title.localeCompare(b.title)));
  };

  const handleInputChange = (e) => {
    const title = e.target.value;

    setSearchTerm(title);
    searchProducts(title);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        
        setProducts(data)
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="app"> 
      <h1>Products</h1>

      <input
        className="search"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for products..."
      />
        
      {products?.length > 0 ? (
        <div className="container">
          {filteredProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No products found</h2>
        </div>
      )}

    </div>
  )
}

export default App
