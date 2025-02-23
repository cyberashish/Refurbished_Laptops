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

export async function POST(req:any) {
    try{
       const {fullname , email , password} = await req.json();
        if(fullname && email && password){
            const user = await prisma.user.findUnique({
                where: {email:email}
            });
            if(!user){
                 await prisma.user.create({
                    data:{
                       fullname: fullname,
                       email: email,
                       password: password
                    }
                   });
                   return NextResponse.json({msg:"User registered successfully",success:true})
            }else{
                return NextResponse.json({msg:"User already exist",success:false});
            }

        }else{
       return NextResponse.json({msg:"All Fields are required",success:false});
        }
    }
    catch(error){
        // console.log(error);
        return NextResponse.json({error})
    }
}