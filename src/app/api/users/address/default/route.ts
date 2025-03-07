import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req:Request){
    try{
       const {addressId, isDefault} = await req.json();
       if(addressId && isDefault){
        if(addressId){
            const updatedAddress = await prisma.address.update({
              where: {id:addressId},
              data: {
                  isDefault:isDefault
              }
            });
            return NextResponse.json({data: updatedAddress , status: 200 , msg:"Successfully updated user address" , success:true})
         }else{
          return NextResponse.json({error:"All data fields are required" , msg:"Failed to update shipping address" , status:404 , success:false});
         }
       }else{
        return NextResponse.json({error:"All data fields are required" , msg:"Failed to update shipping address" , status:404 , success:false});
       }
    }catch(error){
        return NextResponse.json({error , msg:"Failed to update shipping address" , status:404 , success:false});
    }
}