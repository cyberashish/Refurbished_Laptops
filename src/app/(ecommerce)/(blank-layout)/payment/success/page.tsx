import React from 'react';
import payment from "@/assets/images/payments/success_payment.jpg"
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center' >
         <div className="lg:w-1/4 w-full flex flex-col justify-center">
             <Image src={payment} alt="images"  />
             <h3 className="text-lg text-center font-semibold text-secondary">Your payment has been successfully Completed!</h3>
             <Link href="/users/order" className=' w-full flex justify-center' >
             <button className='py-2.5 mt-4 px-8 rounded-full font-medium text-base bg-secondary text-white hover:bg-secondary/90' >Go to your Orders</button>
             </Link>
         </div>
    </div>
  )
}

export default page
