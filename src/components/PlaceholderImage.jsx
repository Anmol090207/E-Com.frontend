import React from "react";
import { Leaf } from "lucide-react";
import "../css/products.css";

// Swap this for <img src={product.image} alt={product.name} /> once
// you have real product photography.
export default function PlaceholderImage({ tag }) {
  return (
    <div className="placeholder-image">
      <Leaf size={22} strokeWidth={1.5} />
      <span className="placeholder-tag">{tag}</span>
    </div>
  );
}
