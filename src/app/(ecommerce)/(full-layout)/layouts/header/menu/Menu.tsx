import React from 'react'
import ModestMenu from './ModestMenu'
import Link from 'next/link'
import MegaMenu from './MegaMenu'

const Menu = () => {
    const ProductMenuItems = [
        {
            id: 1,
            title: "Educational Institute",
            href: "/"
        },
        {
            id: 2,
            title: "Startups",
            href: "/"
        },
        {
            id: 3,
            title: "SMEs",
            href: "/"
        },
        {
            id: 4,
            title: "Exam Centre",
            href: "/"
        },
        {
            id: 5,
            title: "NGO",
            href: "/"
        },
        {
            id: 6,
            title: "Become Dealer",
            href: "/"
        },
    ]
    const StudentsMenuItems = [
        {
            id: 1,
            title: "For Students",
            href: "/"
        },
        {
            id: 2,
            title: "Campus Ambassador Program",
            href: "/"
        },
    ]
    const CompanyMenuItems = [
        {
            id: 1,
            title: "About Us",
            href: "/"
        },
        {
            id: 2,
            title: "Investors",
            href: "/"
        },
        {
            id: 3,
            title: "Stores",
            href: "/"
        },
    ]
  return (
    <div className='lg:flex hidden items-center gap-3 justify-center pb-2'>
      <Link href="/" className='text-[15px] font-semibold text-dark block hover:text-primary mx-1' >Macbook</Link> 
      <ModestMenu title="Businesses" items={[...ProductMenuItems]} />
      <MegaMenu/>
      <ModestMenu title="Students" items={[...StudentsMenuItems]} />
      <Link href="/" className='text-base font-semibold text-dark block hover:text-primary mx-1' >Dream On</Link> 
      <ModestMenu title="Company" items={[...CompanyMenuItems]} />
    </div>
  )
}

export default Menu
