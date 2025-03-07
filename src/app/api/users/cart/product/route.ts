import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const {userId} = await req.json();
        if(userId){
            const cartItems = await prisma.cartItem.findMany({
                where: { userId: userId },
                include: { laptop: true }, 
              });
              return NextResponse.json({data:cartItems,msg:"Successfully fetched cart items",status:200});
        }else{

        }
    }catch(error){
        return NextResponse.json({error,msg:"Failed to fetch cart items", status:400})
    }
}