import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST (req:Request){
    try{
     const {userId , laptopId} = await req.json();
      if(userId && laptopId){
        let isExistingWIshlistItem = await prisma.wishlist.findFirst({
            where:{
                userId,
                laptopId
            }
        })
        if(!isExistingWIshlistItem){
            const wishlistItem = await prisma.wishlist.create({
                data:{
                    userId,
                    laptopId
                }
             });
             return NextResponse.json({data : wishlistItem , status:200, success:true, msg:"Wislist item created successfully"})
        }else{
            return NextResponse.json({error:"Wislist item already exist" , msg:"Failed to create wishlist" , status:400 , success:false})
        }

      }else{
        return NextResponse.json({error:"All data fields are required" , msg:"Failed to create wishlist" , status:400 , success:false})
      }
    }catch(error){
        return NextResponse.json({error , msg:"Failed to create wishlist" , status:400 , success:false});
    }
}


export async function DELETE(req:Request){
    try{
        const {wishlistItemId} = await req.json();
         if(wishlistItemId){
           const wishlistItem = await prisma.wishlist.delete({
               where:{id:wishlistItemId}
            });
            return NextResponse.json({data : wishlistItem , status:200, success:true, msg:"Wislist item deleted successfully"})
         }else{
           return NextResponse.json({error:"All data fields are required" , msg:"Failed to delete wishlist item" , status:400 , success:false})
         }
       }catch(error){
           return NextResponse.json({error , msg:"Failed to delete wishlist item" , status:400 , success:false});
       }
}