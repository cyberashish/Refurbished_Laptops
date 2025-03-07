import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req:Request){
    try{
      const {cartItemId , operation} = await req.json();
      if(cartItemId && operation){
        if(operation === "increment"){
            const updatedCartItem = await prisma.cartItem.update({
                where:{id:cartItemId},
                data:{
                    quantity: {
                        increment:1
                    }
                }
            });
            return NextResponse.json({data:updatedCartItem , msg:"Successfully updated cart item" , status:200 , success:true})
        }else{
            const updatedCartItem = await prisma.cartItem.update({
                where:{id:cartItemId},
                data:{
                    quantity: {
                        decrement:1
                    }
                }
            });
            return NextResponse.json({data:updatedCartItem , msg:"Successfully updated cart item" , status:200 , success:true})
        }
        
       
      }else{
        return NextResponse.json({msg:"All data fields are required",success:false,status:400});
      }
    }catch(error){
        return NextResponse.json({msg:"Failed to update cart item",success:false,status:400,error});
    }
}