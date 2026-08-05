import React from "react";
import { X } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage.jsx";
import "../css/products.css";

export default function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          <PlaceholderImage tag={product.tag} />
        </div>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
          <span className="product-category">{product.category}</span>
          <h2 className="modal-title voice">{product.name}</h2>
          <p className="modal-desc">{product.description}</p>
          <div className="modal-price">${product.price}</div>
          <button
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => {
              onAdd(product);
              onClose();
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
