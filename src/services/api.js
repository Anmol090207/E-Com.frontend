/* ============================================================
   PLACEHOLDER SERVICE LAYER
   Every function here returns mock data with a fake delay so the
   rest of the app already behaves like it's talking to a real
   API. When your backend is ready, replace the internals of each
   function with a real `fetch(...)` call — the function names and
   return shapes are designed so nothing else in the app needs to
   change.
   ============================================================ */

const MOCK_PRODUCTS = [
  { id: 1, name: "Field Canvas Tote", price: 48, category: "Bags", tag: "FCT-01", description: "Heavyweight cotton canvas tote with reinforced straps. Placeholder copy — swap for real product description." },
  { id: 2, name: "Ridge Wool Beanie", price: 26, category: "Accessories", tag: "RWB-02", description: "Merino wool beanie, ribbed knit. Placeholder copy — swap for real product description." },
  { id: 3, name: "Harbor Linen Shirt", price: 72, category: "Clothing", tag: "HLS-03", description: "Relaxed-fit linen shirt in a washed finish. Placeholder copy — swap for real product description." },
  { id: 4, name: "Basin Ceramic Mug", price: 22, category: "Home", tag: "BCM-04", description: "Hand-glazed stoneware mug, 12oz. Placeholder copy — swap for real product description." },
  { id: 5, name: "Trail Leather Belt", price: 38, category: "Accessories", tag: "TLB-05", description: "Full-grain leather belt with brass buckle. Placeholder copy — swap for real product description." },
  { id: 6, name: "Meadow Knit Sweater", price: 89, category: "Clothing", tag: "MKS-06", description: "Chunky knit crewneck sweater. Placeholder copy — swap for real product description." },
  { id: 7, name: "Alder Wood Tray", price: 34, category: "Home", tag: "AWT-07", description: "Solid alder wood catch-all tray. Placeholder copy — swap for real product description." },
  { id: 8, name: "Summit Duffel Bag", price: 96, category: "Bags", tag: "SDB-08", description: "Weatherproof canvas duffel with leather trim. Placeholder copy — swap for real product description." },
  { id: 9, name: "Cove Cotton Socks", price: 14, category: "Accessories", tag: "CCS-09", description: "Set of two combed cotton socks. Placeholder copy — swap for real product description." },
];

function delay(ms = 250) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// GET /api/products
export async function fetchProducts() {
  await delay();
  return MOCK_PRODUCTS;
  // Real version:
  // const res = await fetch("/api/products");
  // if (!res.ok) throw new Error("Failed to load products");
  // return res.json();
}

// GET /api/products/:id
export async function fetchProductById(id) {
  await delay();
  const product = MOCK_PRODUCTS.find((p) => p.id === id);
  if (!product) throw new Error("Product not found");
  return product;
  // Real version:
  // const res = await fetch(`/api/products/${id}`);
  // if (!res.ok) throw new Error("Failed to load product");
  // return res.json();
}

// POST /api/orders
export async function placeOrder({ formData, cart }) {
  await delay(400);
  console.log("Placeholder order submitted:", { formData, cart });
  return { orderId: `PLACEHOLDER-${Date.now()}`, status: "confirmed" };
  // Real version:
  // const res = await fetch("/api/orders", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ formData, cart }),
  // });
  // if (!res.ok) throw new Error("Failed to place order");
  // return res.json();
}
