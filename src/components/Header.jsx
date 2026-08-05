import React from "react";
import { ShoppingBag, Search } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import "../css/header.css";

export default function Header({ query, setQuery }) {
  const { cartCount, setCartOpen } = useCart();

  return (
    <header className="header">
      <div className="header-inner wrap">
        <div className="header-logo voice">Fieldstone</div>

        <div className="header-search">
          <Search size={16} color="var(--ink-soft)" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
          />
        </div>

        <button className="cart-btn" onClick={() => setCartOpen(true)}>
          <ShoppingBag size={16} />
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
