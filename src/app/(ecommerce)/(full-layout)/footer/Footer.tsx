import { Icon } from '@iconify/react';
import Link from 'next/link';


const Footer = () => {
  return (
    <>
      <footer className='bg-darkprimary py-10' >
        <div className="container-sm mx-auto">
            <h3 className='text-3xl text-white font-semibold text-center'> We ❤️ Being Friends</h3>
             <div className="flex gap-12 items-center justify-center my-8">
             <div className="icon-wrapper">
                <Link href="/" ><Icon icon="logos:facebook" className='text-4xl' /></Link>
             </div>
             <Icon icon="fa6-brands:square-x-twitter" className='text-4xl'/>
             <div className="icon-wrapper">
                <Link href="/" ><Icon icon="skill-icons:instagram" className='text-4xl' /></Link>
             </div>
             <Link href="/" ><Icon icon="logos:pinterest" className='text-4xl'/></Link>
             <Link href="/" ><Icon icon="logos:youtube-icon" className='text-3xl'/></Link>
             </div>
             <p className='text-xl mb-10 font-medium text-white text-center'>Choose Quality! Choose Lapfurbo!</p>
             <div className="max-w-7xl mx-auto mt-8">
              <div className="grid grid-cols-12 lg:gap-y-20 lg:gap-x-20 gap-x-0 lg:px-0 px-6">
                 <div className="xl:col-span-3 lg:col-span-6 col-span-12">
                     <h1 className='text-lg font-semibold text-white mb-6' >Contact</h1>
                      <ul className='flex flex-col gap-3'>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >+91 9159305599</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >enquiry@deyga.in</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Contact us</Link>
                        </li>
                        <li className='text-base text-white font-semibold uppercase group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >For Corporate Orders:</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >business@deyga.in</Link>
                        </li>
                      </ul>
                 </div>
                 <div className="xl:col-span-3 lg:col-span-6 col-span-12">
                     <h1 className='text-lg font-semibold text-white mb-6' >Support</h1>
                      <ul className='flex flex-col gap-3'>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >About us</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >FAQs</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Privacy policy</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Terms and Conditions</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Shipping & Returns</Link>
                        </li>
                      </ul>
                 </div>
                 <div className="lg:col-span-2 col-span-12">
                 <h1 className='text-lg font-semibold text-white mb-6' >Products</h1>
                      <ul className='flex flex-col gap-3'>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >HP Laptops</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Dell Laptops</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Acer Laptops</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Asus Laptops</Link>
                        </li>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Lenevo Laptops</Link>
                        </li>
                      </ul>
                 </div>
                 <div className="xl:col-span-3 lg:col-span-6 col-span-12">
                     <h1 className='text-lg font-semibold text-white mb-6' >Sign-up to get closer</h1>
                      <ul className='flex flex-col gap-3'>
                        <li className='text-base hover:text-secondary text-gray-300 font-medium group'>
                          <Link href="/" >Subscribe to receive updates, access to exclusive deals, and more.</Link>
                        </li>
                      </ul>
                      <div className="relative">
    <input type="email" className="peer py-3 pe-0 ps-8 block text-white w-full bg-transparent border-b border-gray-300 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 focus-visible:ring-0 focus:outline-0" placeholder="Enter your email address"/>
    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none"/>
    <Icon icon="oui:email" className='absolute start-0 top-4 text-white' />
    </div>
             <Link href="/" className='mt-6 block text-center' >
               <div className="bg-secondary hover:bg-secondary/90 font-medium text-white py-2 px-3 text-lg hover:bg-primaryemphasis rounded-md" >
                Subscribe
               </div>
             </Link>
                 </div>
              </div>
             </div> 
        </div>
      </footer>
    </>
  )
}

export default Footer
