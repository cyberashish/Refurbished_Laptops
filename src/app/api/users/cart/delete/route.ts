import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req:Request){
 try{
    const {cartItemId} = await req.json();
     if(cartItemId){
        const deletedUser = await prisma.cartItem.delete({
            where : {
                id: cartItemId
            }
        });
        return NextResponse.json({data:deletedUser, msg:"Successfully deleted" , success:true})
     }else{
        return NextResponse.json({error:"All data fields are required",msg:"Failed to delete this cart item" , success: false})
     }
 }catch(error){
    return NextResponse.json({error,msg:"Failed to delete this cart item" , success: false})
 }
}