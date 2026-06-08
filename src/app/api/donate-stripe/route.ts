import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { amount, email, name } = await req.json();
  
  if (!amount || !email) {
    return NextResponse.json({ error: "Amount and email are required" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      metadata: { name },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Tree Donation — TRCC",
              description: `Planting trees for a greener Nigeria. Donated by ${name}`,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}