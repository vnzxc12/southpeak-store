const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { cart, customer } = req.body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty." });
    }

    if (!customer || !customer.name || !customer.email || !customer.phone) {
      return res.status(400).json({ error: "Missing customer info." });
    }

    const line_items = cart.map((item) => ({
      currency: "PHP",
      amount: Math.round(Number(item.price) * 100),
      name: item.name,
      quantity: Number(item.quantity),
    }));

    const payload = {
      data: {
        attributes: {
          billing: {
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: {
              line1: customer.addressLine1 || "",
              line2: customer.addressLine2 || "",
              city: customer.city || "",
              state: customer.province || "",
              postal_code: customer.postalCode || "",
              country: "PH",
            },
          },
          send_email_receipt: true,
          show_line_items: true,
          show_description: true,
          description: "Website order payment",
          line_items,
          payment_method_types: ["qrph"],
          success_url: "http://localhost:3000",
          cancel_url: "http://localhost:3000",
        },
      },
    };

    const secretKey = process.env.PAYMONGO_SECRET_KEY;

    if (!secretKey) {
      return res.status(500).json({
        error: "PAYMONGO_SECRET_KEY is missing in .env",
      });
    }

    const encodedKey = Buffer.from(secretKey + ":").toString("base64");

    const response = await axios.post(
      "https://api.paymongo.com/v1/checkout_sessions",
      payload,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: `Basic ${encodedKey}`,
        },
      }
    );

    res.json({
      checkout_url: response.data?.data?.attributes?.checkout_url,
    });
  } catch (error) {
    console.error("PayMongo error:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to create checkout session.",
      details: error.response?.data || error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});