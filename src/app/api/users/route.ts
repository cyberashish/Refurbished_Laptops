import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:any) {
    try{
       const {fullname , email , password,verificationToken,verificationTokenExpiry} = await req.json();
       console.log(password);
        if(fullname && email && password){
            const user = await prisma.user.findUnique({
                where: {email:email}
            });
            if(!user){
                const newUser = await prisma.user.create({
                    data:{
                       fullname: fullname,
                       email: email,
                       password: password,
                       verificationToken: verificationToken,
                       verificationTokenExpiry
                    }
                   });
                   return NextResponse.json({msg:"User registered successfully",success:true,email:newUser.email,verificationToken:newUser.verificationToken,fullname:newUser.fullname,status:200 })
            }else{
                return NextResponse.json({msg:"User already exist",success:false,status:400});
            }

        }else{
       return NextResponse.json({msg:"All Fields are required",success:false,status:400});
        }
    }
    catch(error){
        // console.log(error);
        return NextResponse.json({error})
    }
}

