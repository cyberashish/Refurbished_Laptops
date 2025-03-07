
import { EmailTemplate } from '@/app/components/email-template/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req:Request) {
  try {
    const {verificationToken,fullname,email} = await req.json();
    console.log(verificationToken,"mine",email);
    const emailContent = await EmailTemplate({ firstName: fullname, verificationToken });

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['cyberashish321@gmail.com'],
      subject: 'Hello world',
      react: emailContent,
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}


