import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(req:Request){
    try{
      const {userId} = await req.json();
       if(userId){
        console.log(userId);
        const userAddresses = await prisma.address.findMany({
          where : {
             userId: userId
          },
         });
         return NextResponse.json({data: userAddresses , status: 200 , msg:"Successfully get user address" , success:true})
       }else{
        return NextResponse.json({error:"Failed to get userId" , msg:"Failed to add shipping address" , status:404 , success:false});
       }
     
    }catch(error){
        return NextResponse.json({error , msg:"Failed to add shipping address" , status:404 , success:false});
    }
}

