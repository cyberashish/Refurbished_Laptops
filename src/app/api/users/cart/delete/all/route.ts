import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req:Request){
   try{
     const {userId} = await req.json();
     if(userId){
       const deletedItems = await prisma.cartItem.deleteMany({
        where:{
            userId:userId
        }
       });
       return NextResponse.json({data:deletedItems , msg:"Successfully deleted all times" , status:200 , success:true})
     }else{
        return NextResponse.json({error:"All data fields are required" , tatus:400 , success:false})
     }
    }catch(error){
    return NextResponse.json({error , msg:"Failed to delete all cart-items" , status:400 , success:false})
   }
}