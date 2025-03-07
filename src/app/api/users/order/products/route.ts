import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
      const {userId} = await req.json();
      const userOrders = await prisma.order.findMany({
        where: {
          userId: userId, // Filter by user ID
        },
         include:{
            items: {
                include:{
                    laptop:true
                }
            }
         }
      })
      return NextResponse.json({data: userOrders , msg:"Successfully fetched order products" , status:200 , success:true})
    }catch(error){
      console.log(error);
      return NextResponse.json({error , msg:"Failed to fetch specific orders" , status:400 , success:false})
    }
 }