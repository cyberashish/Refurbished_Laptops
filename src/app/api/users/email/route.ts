import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:any){
    try{
      const {email} = await req.json();
      if(email){
        const user = await prisma.user.findUnique({
          where:{
              email:email
          }
        });
        return NextResponse.json({user,success:true,status:200 ,msg:"Successfully fetched user by email"})
      }else{
        return NextResponse.json({error:"All data fields are required",msg:"Failed to get a user",success:false, status:404})
      }
    }catch(error){
       return NextResponse.json({error,msg:"Failed to get a user",success:false, status:404})
    }
}