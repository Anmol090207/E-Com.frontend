import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import PlaceholderImage from "./PlaceholderImage.jsx";
import "../css/cart.css";

export default function CartDrawer({ products }) {
  const { cart, cartOpen, setCartOpen, updateQty, removeItem } = useCart();
  const navigate = useNavigate();

  const items = cart.map((c) => ({ ...c, product: products.find((p) => p.id === c.id) }));
  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  return (
    <>
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)} />}
      <div className={`cart-drawer ${cartOpen ? "open" : "closed"}`}>
        <div className="cart-header">
          <h3 className="voice" style={{ fontSize: 20, margin: 0 }}>Your cart</h3>
          <button className="modal-close" style={{ position: "static" }} onClick={() => setCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 && <p style={{ color: "var(--ink-soft)", fontSize: 14 }}>Your cart is empty.</p>}
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <PlaceholderImage tag={item.product.tag} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="cart-item-name">{item.product.name}</div>
                <div className="cart-item-price">${item.product.price}</div>
                <div className="cart-qty-row">
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)}>
                    <Minus size={12} />
                  </button>
                  <span style={{ fontSize: 13, minWidth: 16, textAlign: "center" }}>{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)}>
                    <Plus size={12} />
                  </button>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span style={{ fontWeight: 600 }}>${total.toFixed(2)}</span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={() => {
                setCartOpen(false);
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
