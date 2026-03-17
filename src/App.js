import { useEffect, useMemo, useState } from "react";


const products = [
{
id:1,
name:"Penfolds Bin 28",
category:"Red Wine",
price:2500,
oldPrice:2500,
badge:"",
origin:"Australia",
volume:"750ml",
alcohol:"14%",
image:"https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea",
description:"Premium wine selection.",
notes:["Rich","Premium","Classic"]
},
{
id:2,
name:"Penfolds 128",
category:"Red Wine",
price:2900,
oldPrice:2900,
badge:"",
origin:"Australia",
volume:"750ml",
alcohol:"14%",
image:"https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea",
description:"Premium wine selection.",
notes:["Bold","Premium","Classic"]
},
{
id:3,
name:"Penfolds Bin 2",
category:"Red Wine",
price:3200,
oldPrice:3200,
badge:"",
origin:"Australia",
volume:"750ml",
alcohol:"14%",
image:"https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea",
description:"Premium wine selection.",
notes:["Smooth","Premium","Classic"]
},
{
id:4,
name:"Singleton",
category:"Whisky",
price:4000,
oldPrice:4000,
badge:"",
origin:"Scotland",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1569529465841-dfecdab7503b",
description:"Premium whisky selection.",
notes:["Smooth","Honey","Oak"]
},
{
id:5,
name:"Shuijingfan Jingtai 500 ML",
category:"Spirits",
price:4500,
oldPrice:4500,
badge:"",
origin:"China",
volume:"500ml",
alcohol:"52%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Luxury Chinese spirit.",
notes:["Strong","Luxury","Rare"]
},
{
id:6,
name:"Black Label 3L",
category:"Whisky",
price:6500,
oldPrice:6500,
badge:"",
origin:"Scotland",
volume:"3L",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1569529465841-dfecdab7503b",
description:"Premium blended Scotch whisky.",
notes:["Smooth","Rich","Classic"]
},
{
id:7,
name:"Dream Blue M3",
category:"Spirits",
price:7000,
oldPrice:7000,
badge:"",
origin:"China",
volume:"500ml",
alcohol:"52%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Luxury Chinese liquor.",
notes:["Luxury","Rare","Premium"]
},
{
id:8,
name:"Royal Salute 21 700ML",
category:"Whisky",
price:7500,
oldPrice:7500,
badge:"",
origin:"Scotland",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1569529465841-dfecdab7503b",
description:"Royal Salute premium whisky.",
notes:["Luxury","21 Years","Collector"]
},
{
id:9,
name:"Gift Box XO",
category:"Cognac",
price:9000,
oldPrice:9000,
badge:"",
origin:"France",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Luxury XO gift set.",
notes:["XO","Luxury","Premium"]
},
{
id:10,
name:"Chivas Regal",
category:"Whisky",
price:9000,
oldPrice:9000,
badge:"",
origin:"Scotland",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1569529465841-dfecdab7503b",
description:"Premium Scotch whisky.",
notes:["Smooth","Rich","Classic"]
},
{
id:11,
name:"Hennessy VSOP 1765",
category:"Cognac",
price:9200,
oldPrice:9200,
badge:"",
origin:"France",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Classic VSOP cognac.",
notes:["VSOP","Luxury","Premium"]
},
{
id:12,
name:"Remy Martin XO 700ML",
category:"Cognac",
price:10000,
oldPrice:10000,
badge:"",
origin:"France",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Luxury XO cognac.",
notes:["XO","Premium","Luxury"]
},
{
id:13,
name:"Hennessy 1.5L",
category:"Cognac",
price:10500,
oldPrice:10500,
badge:"",
origin:"France",
volume:"1.5L",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Large format Hennessy bottle.",
notes:["Luxury","Collector","Premium"]
},
{
id:14,
name:"Rémy Martin XO 700ML",
category:"Cognac",
price:11000,
oldPrice:11000,
badge:"",
origin:"France",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Luxury XO cognac.",
notes:["XO","Premium","Luxury"]
},
{
id:15,
name:"Camus Cask Collection Brandy 750 ML",
category:"Brandy",
price:11000,
oldPrice:11000,
badge:"",
origin:"France",
volume:"750ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Rare cask brandy.",
notes:["Rare","Luxury","Collector"]
},
{
id:16,
name:"Wuliangye",
category:"Spirits",
price:11000,
oldPrice:11000,
badge:"",
origin:"China",
volume:"500ml",
alcohol:"52%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Premium Chinese liquor.",
notes:["Luxury","Rare","Premium"]
},
{
id:17,
name:"Hennessy XO 70cl",
category:"Cognac",
price:12000,
oldPrice:12000,
badge:"",
origin:"France",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Iconic XO cognac.",
notes:["XO","Luxury","Premium"]
},
{
id:18,
name:"Remy Martin 3L",
category:"Cognac",
price:19000,
oldPrice:19000,
badge:"",
origin:"France",
volume:"3L",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Large format cognac bottle.",
notes:["Luxury","Collector","Premium"]
},
{
id:19,
name:"Hennessy 3L 6 Jin",
category:"Cognac",
price:19000,
oldPrice:19000,
badge:"",
origin:"France",
volume:"3L",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Large format Hennessy bottle.",
notes:["Luxury","Collector","Premium"]
},
{
id:20,
name:"Martell Cordon Bleu 1.5 L",
category:"Cognac",
price:27000,
oldPrice:27000,
badge:"",
origin:"France",
volume:"1.5L",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Premium Martell cognac.",
notes:["Luxury","Collector","Premium"]
},
{
id:21,
name:"Guizhou Maotai Liquor",
category:"Spirits",
price:29000,
oldPrice:29000,
badge:"",
origin:"China",
volume:"500ml",
alcohol:"53%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Famous Chinese premium liquor.",
notes:["Luxury","Rare","Collector"]
},
{
id:22,
name:"Martell XO 1.5L",
category:"Cognac",
price:33000,
oldPrice:33000,
badge:"",
origin:"France",
volume:"1.5L",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Large luxury XO bottle.",
notes:["Luxury","Collector","Premium"]
},
{
id:23,
name:"Maotai",
category:"Spirits",
price:39000,
oldPrice:39000,
badge:"",
origin:"China",
volume:"500ml",
alcohol:"53%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Chinese national liquor.",
notes:["Rare","Luxury","Premium"]
},
{
id:24,
name:"Hennessy VSOP 70cl",
category:"Cognac",
price:57700,
oldPrice:57700,
badge:"",
origin:"France",
volume:"700ml",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Classic VSOP cognac.",
notes:["Premium","Luxury","Smooth"]
},
{
id:25,
name:"Martell XO 3L",
category:"Cognac",
price:67000,
oldPrice:67000,
badge:"",
origin:"France",
volume:"3L",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Large luxury Martell XO bottle.",
notes:["Collector","Luxury","Rare"]
},
{
id:26,
name:"Hennessy XO 3L",
category:"Cognac",
price:68000,
oldPrice:68000,
badge:"",
origin:"France",
volume:"3L",
alcohol:"40%",
image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
description:"Large luxury XO cognac bottle.",
notes:["Collector","Luxury","Rare"]
}
];

const categories = ["All", "Red Wine", "Rosé", "Whisky", "Spirits"];

function peso(value) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(value);
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
const [cart, setCart] = useState([]);
const [drawerOpen, setDrawerOpen] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const [search, setSearch] = useState("");
const [checkingOut, setCheckingOut] = useState(false);
const [page, setPage] = useState("shop"); // shop | checkout | customer | payment-success | payment-cancelled
const [currentOrderId, setCurrentOrderId] = useState(
  localStorage.getItem("current_order_id") || ""
);
const [orderStatus, setOrderStatus] = useState(null);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const searchMatch = `${product.name} ${product.category} ${product.origin}`
        .toLowerCase()
        .includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, search]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setDrawerOpen(true);
  };

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
const generateOrderId = () => {
  return `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

const clearCheckoutState = () => {
  setCart([]);
  setDrawerOpen(false);
  setSelectedProduct(null);
  localStorage.removeItem("current_order_id");
  setCurrentOrderId("");
  setOrderStatus(null);
};

const fetchOrderStatus = async (orderId) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/order-status/${orderId}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch order status.");
    }

    setOrderStatus(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
  const goToCheckoutPage = () => {
    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }
    setDrawerOpen(false);
    setSelectedProduct(null);
    setPage("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToCustomerPage = () => {
    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }
    setPage("customer");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBackToShop = () => {
  setPage("shop");
  setSelectedProduct(null);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const goBackToCheckout = () => {
    setPage("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const payNow = async () => {
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
    alert("Please fill in name, email, and phone.");
    return;
  }

  try {
    setCheckingOut(true);

    const orderId = generateOrderId();
    setCurrentOrderId(orderId);
    localStorage.setItem("current_order_id", orderId);

    const response = await fetch(
      "http://localhost:5000/api/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          cart,
          customer: customerInfo,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to start checkout.");
    }

    if (data?.checkout_url) {
      window.location.href = data.checkout_url;
    } else {
      alert("Checkout session created, but no payment link was returned.");
    }
  } catch (error) {
    alert("Checkout failed. Check your backend or PayMongo key.");
    console.error(error);
  } finally {
    setCheckingOut(false);
  }
};

  useEffect(() => {
    document.body.style.background = "#050505";
    return () => {
      document.body.style.background = "#f5f5f4";
    };
  }, []);
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const payment = params.get("payment");
  const orderIdFromUrl = params.get("order_id");
  const savedOrderId = orderIdFromUrl || localStorage.getItem("current_order_id");

  if (!savedOrderId) return;

  setCurrentOrderId(savedOrderId);

  if (payment === "success") {
    setPage("payment-success");

    let attempts = 0;
    const maxAttempts = 10;

    const poll = async () => {
      attempts += 1;
      const order = await fetchOrderStatus(savedOrderId);

      if (order?.status === "paid") {
        clearCheckoutState();
        window.history.replaceState({}, "", "/");
        return;
      }

      if (attempts < maxAttempts) {
        setTimeout(poll, 2000);
      }
    };

    poll();
  }

  if (payment === "cancelled") {
    setPage("payment-cancelled");
    window.history.replaceState({}, "", "/");
  }
}, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-red-700/30 blur-3xl animate-pulse" />
        <div className="absolute right-[-8%] top-[15%] h-80 w-80 rounded-full bg-orange-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[20%] h-96 w-96 rounded-full bg-red-900/25 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,80,80,0.12),transparent_35%),linear-gradient(to_bottom,rgba(120,0,0,0.18),rgba(0,0,0,0.96))]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={goBackToShop}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg shadow-[0_0_30px_rgba(255,80,80,0.2)] backdrop-blur-md"
            >
              🍷
            </button>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/60 sm:text-xs">
                Luxury Selection
              </p>
              <h1 className="text-base font-semibold sm:text-xl lg:text-2xl">
                Southpeak Fine Wines & Spirits
              </h1>
            </div>
          </div>

          {page === "shop" && (
            <div className="hidden flex-1 px-6 lg:block">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search wines, spirits, origins..."
                className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/45 outline-none backdrop-blur-md focus:border-red-400/50"
              />
            </div>
          )}

          <div className="flex items-center gap-3">
            {page !== "shop" && (
              <button
                onClick={goBackToShop}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-md transition hover:bg-white/15"
              >
                Continue Shopping
              </button>
            )}

            <button
              onClick={() => setDrawerOpen(true)}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium shadow-[0_0_30px_rgba(255,80,80,0.08)] backdrop-blur-md transition hover:bg-white/15"
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>

        {page === "shop" && (
          <div className="px-4 pb-4 lg:hidden">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search wines, spirits, origins..."
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/45 outline-none backdrop-blur-md focus:border-red-400/50"
            />
          </div>
        )}
      </header>

      <main>
        {page === "shop" && (
          <>
            <section className="relative mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-12">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=80"
                  alt="Luxury wine hero"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-950/40 to-black/10" />
                <div className="absolute inset-0 flex items-end p-6 sm:p-10">
                  <div className="max-w-2xl">
                    <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-white/70 sm:text-xs">
                      Curated Collection 2026
                    </p>
                    <h2 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                      Luxury bottles for intimate dinners and grand celebrations.
                    </h2>
                    <p className="mt-4 max-w-lg text-sm text-white/80 sm:text-base">
                      Discover fine wines, collector bottles, and premium spirits presented in an elevated shopping experience.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                        Explore Collection
                      </button>
                      <button className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15">
                        Limited Edition
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60 sm:text-xs">
                    Featured Segments
                  </p>
                  <div className="mt-6 space-y-5">
                    {[
                      ["Red Wines", "40%"],
                      ["Whisky", "30%"],
                      ["Rosé & Sparkling", "20%"],
                      ["Premium Spirits", "10%"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-white/80">{label}</span>
                          <span className="font-semibold text-white">{value}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400"
                            style={{ width: value }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-red-900/30 to-black/40 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <div className="absolute right-[-10%] top-[-10%] h-36 w-36 rounded-full bg-red-500/20 blur-3xl" />
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60 sm:text-xs">
                    Private Cellar
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">Rare and gift-worthy selections.</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Built for luxury gifting, upscale dining, and premium celebrations.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-white/60">Bottles</p>
                      <p className="mt-2 text-xl font-semibold">120+</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-white/60">Origins</p>
                      <p className="mt-2 text-xl font-semibold">18</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        selectedCategory === category
                          ? "bg-white text-black"
                          : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
                    Southpeak Selection
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
                    Explore the collection
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-6 text-white/65">
                  Click on the product for more description
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-white/[0.08]"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
                        {product.badge}
                      </div>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium opacity-0 backdrop-blur-md transition group-hover:opacity-100"
                      >
                        Quick View
                      </button>
                    </div>

                    <div className="p-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                        {product.category}
                      </p>
                      <h4 className="mt-3 min-h-[3.5rem] text-lg font-semibold leading-snug">
                        {product.name}
                      </h4>
                      <p className="mt-2 text-sm text-white/65">{product.origin}</p>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-sm text-white/35 line-through">
                          {peso(product.oldPrice)}
                        </span>
                        <span className="text-2xl font-semibold text-red-400">
                          {peso(product.price)}
                        </span>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => addToCart(product)}
                          className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 text-sm font-semibold transition hover:brightness-110"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {page === "checkout" && (
          <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
                Checkout Step 1
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Review your cart
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                Check your selected bottles before proceeding to customer information.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                {cart.length === 0 ? (
                  <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-white/5 p-6 text-center text-white/60">
                    Your cart is empty.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-28 w-24 rounded-2xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold sm:text-base">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-xs text-white/50">{item.category}</p>
                          <p className="mt-3 text-sm font-semibold text-red-400">
                            {peso(item.price)}
                          </p>

                          <div className="mt-4 flex items-center gap-2">
                            <button
                              onClick={() => changeQty(item.id, -1)}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                            >
                              -
                            </button>
                            <span className="min-w-[2rem] text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => changeQty(item.id, 1)}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="ml-auto text-xs text-white/45 hover:text-white"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-right text-sm font-semibold text-white/85">
                          {peso(item.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
                  Order Summary
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>Items</span>
                    <span>{cartCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-red-400">{peso(cartTotal)}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={goToCustomerPage}
                    disabled={!cart.length}
                    className="w-full rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-semibold transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Proceed to Customer Info
                  </button>
                  <button
                    onClick={goBackToShop}
                    className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                  >
                    Back to Shop
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "customer" && (
          <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
                Checkout Step 2
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Customer information
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                Enter the customer details that will appear on the PayMongo checkout page.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/75">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleCustomerChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-red-400/50"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleCustomerChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-red-400/50"
                      placeholder="customer@email.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">Phone *</label>
                    <input
                      type="text"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleCustomerChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-red-400/50"
                      placeholder="09XXXXXXXXX"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/75">Address Line 1</label>
                    <input
                      type="text"
                      name="addressLine1"
                      value={customerInfo.addressLine1}
                      onChange={handleCustomerChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-red-400/50"
                      placeholder="House No. / Street / Barangay"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/75">Address Line 2</label>
                    <input
                      type="text"
                      name="addressLine2"
                      value={customerInfo.addressLine2}
                      onChange={handleCustomerChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-red-400/50"
                      placeholder="Subdivision / Building / Landmark"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">City</label>
                    <input
                      type="text"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleCustomerChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-red-400/50"
                      placeholder="Batangas City"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">Province</label>
                    <input
                      type="text"
                      name="province"
                      value={customerInfo.province}
                      onChange={handleCustomerChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-red-400/50"
                      placeholder="Batangas"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={customerInfo.postalCode}
                      onChange={handleCustomerChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-red-400/50"
                      placeholder="4200"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
                  Final Summary
                </p>

                <div className="mt-6 space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-3 text-sm"
                    >
                      <div className="text-white/75">
                        {item.name} x{item.quantity}
                      </div>
                      <div className="font-semibold text-white/90">
                        {peso(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-red-400">{peso(cartTotal)}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={payNow}
                    disabled={checkingOut || !cart.length}
                    className="w-full rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-semibold transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {checkingOut ? "Preparing PayMongo..." : "Pay Now"}
                  </button>

                  <button
                    onClick={goBackToCheckout}
                    className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                  >
                    Back to Checkout
                  </button>
                </div>

                <p className="mt-4 text-xs text-white/40">
                  This sends the customer information and cart to your backend, then redirects to PayMongo.
                </p>
              </div>
            </div>
          </section>
        )}

        {page === "payment-success" && (
  <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <p className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
        Payment Result
      </p>

      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
        Payment Successful
      </h2>

      {orderStatus?.status === "paid" ? (
        <>
          <p className="mt-4 text-white/75">
            Your payment has been confirmed successfully.
          </p>
          {currentOrderId && (
            <p className="mt-2 text-sm text-white/50">
              Order ID: {currentOrderId}
            </p>
          )}
        </>
      ) : (
        <>
          <p className="mt-4 text-white/75">
            We received your return from PayMongo.
          </p>
          <p className="mt-2 text-sm text-white/50">
            Waiting for final payment confirmation...
          </p>
        </>
      )}

      <div className="mt-8">
        <button
          onClick={goBackToShop}
          className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold transition hover:brightness-110"
        >
          Back to Shop
        </button>
      </div>
    </div>
  </section>
)}

{page === "payment-cancelled" && (
  <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <p className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
        Payment Result
      </p>

      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
        Payment Cancelled
      </h2>

      <p className="mt-4 text-white/75">
        Your payment was not completed. Your cart is still here.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          onClick={() => setPage("customer")}
          className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold transition hover:brightness-110"
        >
          Try Again
        </button>

        <button
          onClick={goBackToShop}
          className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
        >
          Back to Shop
        </button>
      </div>
    </div>
  </section>
)}
      </main>

      {selectedProduct && page === "shop" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:grid-cols-[0.9fr_1.1fr]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-xs backdrop-blur-md"
            >
              Close
            </button>

            <div className="relative min-h-[320px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/50 sm:text-xs">
                {selectedProduct.category}
              </p>
              <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {selectedProduct.name}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {selectedProduct.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedProduct.notes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ["Origin", selectedProduct.origin],
                  ["Volume", selectedProduct.volume],
                  ["Alcohol", selectedProduct.alcohol],
                  ["Style", selectedProduct.badge],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      {label}
                    </p>
                    <p className="mt-3 text-sm font-medium text-white/90">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="text-sm text-white/35 line-through">
                  {peso(selectedProduct.oldPrice)}
                </span>
                <span className="text-3xl font-semibold text-red-400">
                  {peso(selectedProduct.price)}
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold transition hover:brightness-110"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setDrawerOpen(true);
                    setSelectedProduct(null);
                  }}
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform border-l border-white/10 bg-black/75 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
              Cart Drawer
            </p>
            <h3 className="mt-2 text-xl font-semibold">Your selection</h3>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs"
          >
            Close
          </button>
        </div>

        <div className="flex h-[calc(100%-88px)] flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {cart.length === 0 ? (
              <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-white/5 p-6 text-center text-white/60">
                Your cart is empty.
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-20 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-semibold">{item.name}</h4>
                    <p className="mt-1 text-xs text-white/50">{item.category}</p>
                    <p className="mt-3 text-sm font-semibold text-red-400">
                      {peso(item.price)}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => changeQty(item.id, -1)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        -
                      </button>
                      <span className="min-w-[2rem] text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => changeQty(item.id, 1)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-white/45 hover:text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-white/10 p-5">
            <div className="mb-4 flex items-center justify-between text-sm text-white/70">
              <span>Items</span>
              <span>{cartCount}</span>
            </div>
            <div className="mb-6 flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-red-400">{peso(cartTotal)}</span>
            </div>
            <button
              onClick={goToCheckoutPage}
              disabled={!cart.length}
              className="w-full rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-semibold transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Checkout
            </button>
            <p className="mt-3 text-center text-xs text-white/40">
              Cart Drawer → Checkout Page → Customer Info → PayMongo
            </p>
          </div>
        </div>
      </div>

      {drawerOpen && (
        <button
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 z-40 bg-black/45"
          aria-label="Close cart drawer"
        />
      )}
    </div>
  );
}