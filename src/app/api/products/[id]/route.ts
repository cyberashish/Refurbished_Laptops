import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: any }) {
    const productId = await params.id;
  try{
       const product = await prisma.laptop.findUnique({
        where:{
            id: productId
        }
       });
      return NextResponse.json(product);
  }catch(error){
    return NextResponse.json({error})
  }
}