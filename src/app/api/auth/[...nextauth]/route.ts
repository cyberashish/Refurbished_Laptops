
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/app/lib/prisma";

interface credentialstype {
  email:string,
  password:string,
}

const authOptions =  NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || '',
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        CredentialsProvider({
          name: "Credentials",
          /* @ts-expect-error Async Server Component */
          async authorize(credentials:credentialstype){
            const result = await prisma.user.findUnique({
                where: {email: credentials?.email}
            });
            if(!result){
              throw new Error("No User found with this email")
            }
            if(result.password!==credentials?.password||result.email!==credentials?.email){
              throw new Error("Username or password doesn't match")
            }
             return result
          }
        })

      ],
      callbacks: {
        async signIn({ user, account }) {
          if (account?.provider === "google") {
            const existingUser = await prisma.user.findFirst({
              where: { googleId: user.id },
            });
      
            if (existingUser) {
              console.log("Existing user found");
            } else {
              if(user.email && user.name){
                await prisma.user.create({
                  data: {
                    fullname: user.name,
                    email: user.email,
                    googleId: user.id,
                    password: "12345"
                  },
                });
              }
      
              console.log("New Google user created");
              return true; 
            }
          }
      
          return true; 
        },
      },
      
      pages:{
        signIn:'/auth/login',
        signOut: '/',
      }
})

export {authOptions as GET, authOptions as POST}