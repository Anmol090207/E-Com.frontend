import React from "react";
import ProductCard from "./ProductCard.jsx";
import "../css/products.css";

export default function ProductGrid({ products, onAdd, onOpen }) {
  if (products.length === 0) {
    return (
      <div className="product-empty wrap">
        <p>No products match your search.</p>
      </div>
    );
  }

  return (
    <div className="product-grid wrap">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} onOpen={onOpen} />
      ))}
    </div>
  );
}
