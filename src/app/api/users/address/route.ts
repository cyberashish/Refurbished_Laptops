import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(req:Request){
    try{
      const {address,userId} = await req.json();
        if(address && userId){
            const accumulatedUserData = {...address , userId};
            const userAddress = await prisma.address.create({
              data:{
                  ...accumulatedUserData
              }
            });
            return NextResponse.json({data: userAddress , status: 200 , msg:"Successfully created user address" , success:true})
        }else{
             return NextResponse.json({error:"All data fields are required" , msg:"Failed to add shipping address" , status:404 , success:false});
        }
    }catch(error){
        console.log(error)
        return NextResponse.json({error , msg:"Failed to add shipping address" , status:404 , success:false});
    }
}
 

export async function PATCH(req:Request){
    try{
       const {address,addressId} = await req.json();
       if(address && addressId){
          const updatedAddress = await prisma.address.update({
            where: {id:addressId},
            data: {
                ...address
            }
          });
          return NextResponse.json({data: updatedAddress , status: 200 , msg:"Successfully updated user address" , success:true})
       }else{
        return NextResponse.json({error:"All data fields are required" , msg:"Failed to update shipping address" , status:404 , success:false});
       }
    }catch(error){
        return NextResponse.json({error , msg:"Failed to update shipping address" , status:404 , success:false});
    }
}

export async function DELETE(req:Request){
    try{
      const {addressId} = await req.json();
      const deletedUser = await prisma.address.delete({
        where:{id:addressId}
      });
      return NextResponse.json({data: deletedUser , status: 200 , msg:"Successfully deleted user address" , success:true})
    }catch(error){
      return NextResponse.json({error , msg:"Failed to delete shipping address" , status:404 , success:false});
    }
}
