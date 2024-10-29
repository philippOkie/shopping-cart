import React from 'react';

const ProductCard = ({ product: { id, category, description, title, rating, price, image, } }) => {
  return (
    <div className="product" key={id}>
      <div>
        <h2>Price: {price}</h2>
      </div>

      <div>
        <img src={image !== "N/A" ? image : "https://via.placeholder.com/400"} alt={image} />
      </div>

      <div>
        <span>{category}</span>        
        <p>RATED: {rating.rate} by {rating.count} customers</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default ProductCard;