


import { Cashfree } from "cashfree-pg";
import { NextResponse } from "next/server";

// Configure Cashfree with environment variables
Cashfree.XClientId = process.env.CASHFREE_CLIENT_ID!;
Cashfree.XClientSecret = process.env.CASHFREE_CLIENT_SECRET!;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX; // Change to SANDBOX for testing

export async function POST(req: Request) {
  try {

    const {customerName, customerEmail,amount} = await req.json();

    const request = {
      order_amount: amount,
      order_currency: "INR",
      customer_details: {
        customer_id: 'CID89898' + Date.now(),
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: "9989789867",
      },
      order_meta: {
        notify_url: "https://refurbished-laptops.vercel.app/api/webhooks/cashfree",
        return_url: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
      },
      order_id: 'ORID665456' + Date.now(),
      order_note: "This my first Order",
    };

    const response = await Cashfree.PGCreateOrder("2023-08-01", request);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.response?.data || "Internal Server Error" }, { status: 500 });
  }
}
