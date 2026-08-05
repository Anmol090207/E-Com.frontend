import React from "react";
import PlaceholderImage from "./PlaceholderImage.jsx";
import "../css/products.css";

export default function ProductCard({ product, onAdd, onOpen }) {
  return (
    <div className="product-card">
      <button className="product-image-btn" onClick={() => onOpen(product)}>
        <PlaceholderImage tag={product.tag} />
      </button>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <button className="product-name voice" onClick={() => onOpen(product)}>
          {product.name}
        </button>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="product-add" onClick={() => onAdd(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
