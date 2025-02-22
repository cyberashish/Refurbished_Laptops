import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(){
    try{
       const laptops = await prisma.laptop.findMany();
       return NextResponse.json(laptops)
    }catch(error){
        console.log("Error fetching laptops");
        return NextResponse.json({error})
    }
}