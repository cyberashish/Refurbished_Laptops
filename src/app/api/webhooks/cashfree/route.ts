import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse incoming webhook data
    console.log("Received Webhook Data:", body);

    // 🔥 Process webhook event based on type
    if (body.event === "payment.success") {
      console.log("Payment Success:", body);
      // ✅ Update your database, notify the user, etc.
    } else if (body.event === "payment.failed") {
      console.log("Payment Failed:", body);
      // Handle failure case
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
