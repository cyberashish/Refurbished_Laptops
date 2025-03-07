import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req:Request){
    try{
        const {email} = await req.json()
     const getUserCartItems = await prisma.user.findMany({
       where:{
        email: email
       },
       include :{
        cart: {
          include:{
            laptop:true
          }
        }
       }
     }) 
     return NextResponse.json({data:getUserCartItems , success:true})
    }catch(error){
        return NextResponse.json({error , success: false})
    }
}