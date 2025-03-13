
import { NextResponse } from "next/server";

export async function GET(req:Request,{params}:{params:Promise<{orderId:string}>}){
    try{
       const orderId = (await params).orderId;
       console.log(orderId);
        try{
            const orderResponse = await fetch(`https://sandbox.cashfree.com/pg/orders/${orderId}`, {
                method: "GET",
                headers: {
                    'x-api-version': '2023-08-01',
                    'x-client-id': `${process.env.CASHFREE_CLIENT_ID}`,
                    'x-client-secret': `${process.env.CASHFREE_CLIENT_SECRET}`
                  }
            });
        const orderResult = await orderResponse.json();
        console.log(orderResult);
        if(orderResult.order_status === "PAID"){
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/payment/success`);
        }else if(orderResult.order_status === "ACTIVE"){
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/checkout/payment/online/${orderResult.payment_session_id}`)
        }else{
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/payment/failure`);
        }
        }catch(error){
            console.log(error);
          return NextResponse.json({error, msg:"Failed to get order status" , status:400 , success:false})
        }
       
    }catch(error){
        return NextResponse.json({error , msg:"Failed to get order status" , status:400 , success:false})
    }
}