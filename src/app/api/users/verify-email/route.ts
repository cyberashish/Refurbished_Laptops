import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request){
   const {verificationToken} = await req.json();
    try{
      const user = await prisma.user.findFirst({
        where:{verificationToken:verificationToken}
      });


      if(user?.verificationTokenExpiry){
       const expiryDate = new Date(user.verificationTokenExpiry);
       const now = new Date();
       
       if(expiryDate < now){
        await prisma.user.update({
          where : {id : user.id},
          data : {
            isVerified: true,
            verificationToken: ''
          }
        });
        return NextResponse.json({msg:"Email verified successfully" , success:true});
       }
       else{
        return NextResponse.json({ msg: "Your email verification link has been expired" , success:false})
       }
       
      }

    }catch(error){
      console.log(error);
        return NextResponse.json({error, msg: "Failed to verify your email" , success:false})
    }
}