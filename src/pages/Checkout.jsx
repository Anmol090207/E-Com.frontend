import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { placeOrder } from "../services/api.js";
import "../css/checkout.css";

const emptyForm = { name: "", email: "", address: "", city: "", zip: "", cardNumber: "", expiry: "", cvc: "" };

export default function Checkout({ products }) {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [placed, setPlaced] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const items = cart.map((c) => ({ ...c, product: products.find((p) => p.id === c.id) }));
  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  function field(key, label, placeholder, type = "text") {
    return (
      <div className="field">
        <label>{label}</label>
        <input
          type={type}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          placeholder={placeholder}
        />
      </div>
    );
  }

  /* ============================================================
     PLACEHOLDER — calls the mock placeOrder() in services/api.js.
     Point that function at your real backend / payment provider
     (e.g. Stripe) when you're ready; this component won't need
     to change.
     ============================================================ */
  async function handlePlaceOrder() {
    setSubmitting(true);
    await placeOrder({ formData: form, cart });
    setSubmitting(false);
    setPlaced(true);
    clearCart();
  }

  if (placed) {
    return (
      <div className="confirmation">
        <div className="confirmation-icon">
          <Check color="#fff" size={26} />
        </div>
        <h2 className="confirmation-title voice">Order placed</h2>
        <p className="confirmation-copy">
          This is a placeholder confirmation — no real order was submitted or paid for.
          Update <code>placeOrder()</code> in <code>src/services/api.js</code> to call your
          real backend or payment provider.
        </p>
        <button className="btn" style={{ marginTop: 24 }} onClick={() => navigate("/")}>
          Back to shop
        </button>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div>
        <button className="checkout-back" onClick={() => navigate("/")}>
          <ArrowLeft size={15} /> Back to shop
        </button>
        <h2 className="checkout-heading voice">Checkout</h2>

        <div className="section-label">Shipping</div>
        {field("name", "Full name", "Jordan Rivera")}
        {field("email", "Email", "jordan@email.com", "email")}
        {field("address", "Address", "123 Field Street")}
        <div className="field-row">
          {field("city", "City", "Portland")}
          {field("zip", "ZIP", "97201")}
        </div>

        <div className="section-label">Payment (placeholder — not processed)</div>
        {field("cardNumber", "Card number", "4242 4242 4242 4242")}
        <div className="field-row">
          {field("expiry", "Expiry", "MM/YY")}
          {field("cvc", "CVC", "123")}
        </div>

        <button className="btn btn-primary" style={{ width: "100%", marginTop: 10 }} onClick={handlePlaceOrder} disabled={submitting}>
          {submitting ? "Placing order…" : "Place order"}
        </button>
        <p className="checkout-note">
          No payment is actually processed. This button only calls the placeholder
          <code>placeOrder()</code> function.
        </p>
      </div>

      <div>
        <div className="summary-card">
          <h3 className="summary-title voice">Order summary</h3>
          {items.map((item) => (
            <div key={item.id} className="summary-row">
              <span>{item.product.name} × {item.qty}</span>
              <span>${(item.product.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
