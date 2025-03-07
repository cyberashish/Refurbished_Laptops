
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const allCoupons = await prisma.coupon.findMany();
        return NextResponse.json({data:allCoupons,msg:"Successfully fetched all coupons" ,status:200 , success:true});
    }catch(error){
        console.log(error)
        return NextResponse.json({error,msg:"Failed to fetch coupons" ,status:400 , success:false});
    }
}

export async function POST(req:Request){
    try{
      const {code,discount} = await req.json();
      const createdCoupon = await prisma.coupon.create({
        data:{
            code:code,
            discount:discount
        }
      })
      return NextResponse.json({data:createdCoupon,msg:"Successfully created coupon" ,status:200 , success:true});
    }catch(error){
        return NextResponse.json({error,msg:"Failed to create coupons" ,status:400 , success:false});
    }
}