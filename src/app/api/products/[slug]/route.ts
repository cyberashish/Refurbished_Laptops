import { prisma } from "@/app/lib/prisma";
import {  NextResponse } from "next/server";


export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug; 

  try{
    const product = await prisma.laptop.findUnique({
      where:{
        titleSlug : slug
      }
    })
   return NextResponse.json(product);
}catch(error){
 return NextResponse.json({error})
}
}