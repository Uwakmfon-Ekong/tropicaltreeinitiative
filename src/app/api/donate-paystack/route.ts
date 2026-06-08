import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { amount, email, name } = await req.json();

  if (!amount || !email) {
    return NextResponse.json({ error: "Amount and email are required" }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100,
        currency: "NGN",
        metadata: {
          name,
          custom_fields: [
            {
              display_name: "Donor Name",
              variable_name: "donor_name",
              value: name,
            },
          ],
        },
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/success`,
      }),
    });

    const data = await response.json();

    if (!data.status) {
      return NextResponse.json({ error: data.message }, { status: 400 });
    }

    return NextResponse.json({ url: data.data.authorization_url });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}