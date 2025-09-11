import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // importante para receber JSON no futuro

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { name: "Resultados completos do quiz" },
            unit_amount: 500, // 5€ em cêntimos
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/results",
      cancel_url: "http://localhost:3000/",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4242, () =>
  console.log("Servidor Stripe a correr em http://localhost:4242")
);
