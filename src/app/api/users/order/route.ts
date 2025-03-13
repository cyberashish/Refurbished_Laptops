import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

 export async function POST(req:Request){
    try{
        const { userId, totalAmount, paymentMethod, shippingAddress, items , orderId } = await req.json();
        console.log("dhyan se",userId, totalAmount, paymentMethod, shippingAddress, items,);
        if(userId && totalAmount && paymentMethod && shippingAddress && items){

          const modifiedItems = items.map((item:any) => {
              return {laptopId:item.laptopId, quantity:item.quantity , price: (Number(item.laptop.pricing.discountedPrice.replaceAll(",","")))*item.quantity}
          });
          console.log(modifiedItems);


          const order = await prisma.order.create({
            data:{
                userId,
                totalAmount,
                paymentMethod,
                shippingAddress,
                orderId,
                items: {
                  create: [
                    ...modifiedItems
                  ]
                }
            },
            include:{
              items: true
            }
          });
          return NextResponse.json({data: order , msg:"Successfully created order" , status:200 , success:true})
        }else{
            return NextResponse.json({error:"All data fields are required" ,msg:"Failed to create order" , status:400 , success:false })
        }
    }catch(error){
        console.log(error)
        return NextResponse.json({error,msg:"Failed to create order" , status:400 , success:false})
    }
 }

