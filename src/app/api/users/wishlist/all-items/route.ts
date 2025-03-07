import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const {userId} = await req.json();
        if(userId){
            const allWishlistItems = await prisma.wishlist.findMany({
                where:{userId:userId},
                include:{laptop:true}
            });
            console.log(allWishlistItems)
          return NextResponse.json({data: allWishlistItems , msg:"Wishlist items fetched successfully"})
        }else{
            return NextResponse.json({error:"All data fields are required" , msg:"Failed to fetch wishlist item" , status:400 , success:false});
        }
    }catch(error){
        return NextResponse.json({error , msg:"Failed to fetch wishlist item" , status:400 , success:false});
    }
}