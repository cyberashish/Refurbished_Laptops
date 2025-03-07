
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";


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
          credentials: {
            email: { label: "Email", type: "email", required: true },
            password: { label: "Password", type: "password", required: true },
          },
          /* @ts-expect-error Async Server Component */
          async authorize(credentials:credentialstype){
            const user = await prisma.user.findUnique({
                where: {email: credentials?.email}
            });
            if(!user){
              throw new Error("No User found with this email")
            }
            if(user.password && user.email){
              const isValidPassword = await bcrypt.compare(credentials?.password , user?.password);
              console.log(isValidPassword);
              if(isValidPassword){
                return user
              }
              else{
                throw new Error("Username or password doesn't match")
              }
              
            }

          }
        }),

      ],
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
            token.email = user.email;
          }
          return token;
        },
  
    
        async signIn({ user, account }:{user:any,account:any}) {


          if (account?.provider === "google") {
            const existingUser = await prisma.user.findFirst({
              where: { googleId: user.id },
            });
      
            if (existingUser) {
              console.log("Existing user found");
            } else {
              if(user.email && user.name){
                await prisma.user.create({
                  data:{
                    fullname: user.name,
                    email: user.email,
                    googleId: user.id,
                    isVerified: true
                  }
                })
              }
              console.log("New Google user created")
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