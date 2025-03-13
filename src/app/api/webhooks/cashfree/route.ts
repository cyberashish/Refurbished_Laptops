import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Webhook received:", body); 

        // Verify the event type
        if (body.type !== "PAYMENT_SUCCESS_WEBHOOK") {
            return NextResponse.json({ error: "Invalid event type" }, { status: 400 });
        }

        const { order, payment } = body.data;
        const { order_id } = order;
        const { payment_status} = payment;

        // ✅ Update the order status in the database
        const updatedOrder = await prisma.order.update({
            where: { orderId: order_id },
            data: {
                paymentStatus: payment_status === "SUCCESS" ? "PAID" : "FAILED",
            },
        });

        console.log("Order updated successfully:", updatedOrder);
        return NextResponse.json({ success: true, message: "Order updated" });

    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
    }
}
