import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
   try{
    const {userId , cartItems} = await req.json();
      await prisma.$transaction(
        cartItems.map((item:any) =>
          prisma.cartItem.upsert({
            where: {
              userId_laptopId: { userId, laptopId: item.productId },
            },
            update: {
              quantity: { increment: item.quantity }, 
            },
            create: {
              userId,
              laptopId: item.productId,
              quantity: item.quantity, 
            },
          })
        )
      );
      
      const allCartItems = await prisma.cartItem.findMany({
        where: {userId:userId},
        include:{
          laptop:true
        }
      });
       console.log(allCartItems)
      return NextResponse.json({data:allCartItems});
   }catch(error){
     return NextResponse.json({error})
   }
}