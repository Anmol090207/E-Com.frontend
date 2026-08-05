import React from "react";
import "../css/hero.css";

export default function CategoryFilter({ categories, active, setActive }) {
  return (
    <div className="category-filter wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`category-chip ${cat === active ? "active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
