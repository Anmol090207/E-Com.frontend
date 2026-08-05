import React, { useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import ProductModal from "../components/ProductModal.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Shop({ products, loading }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [openProduct, setOpenProduct] = useState(null);
  const { addToCart } = useCart();

  const categories = useMemo(() => ["All", ...new Set(products.map((p) => p.category))], [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [products, query, category]);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <Hero />
      <CategoryFilter categories={categories} active={category} setActive={setCategory} />
      {loading ? (
        <p className="wrap" style={{ color: "var(--ink-soft)", padding: "40px 0" }}>Loading products…</p>
      ) : (
        <ProductGrid products={filtered} onAdd={addToCart} onOpen={setOpenProduct} />
      )}
      <ProductModal product={openProduct} onClose={() => setOpenProduct(null)} onAdd={addToCart} />
    </>
  );
}
