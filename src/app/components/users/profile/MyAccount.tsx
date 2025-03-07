


import { Icon } from "@iconify/react/dist/iconify.js";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const MyAccount = () => {
  const accountDetails = [
    {
      id: uuidv4(),
      title: "Wishlist",
      subtitle: "Love it? Wishlist it!",
      icon: "clarity:store-solid",
      href: "/users/wishlist"
    },
    {
      id: uuidv4(),
      title: "Your Address",
      subtitle: "Add or edit addresses",
      icon: "famicons:location-outline",
      href: "/"
    },
    {
      id: uuidv4(),
      title: "Logout",
      subtitle: "Done shopping? Log out safely!",
      icon: "solar:logout-outline",
      href: "/"
    },
  ];


  const signOutHandler = () => {
    signOut({ callbackUrl: "/auth/login" });
} 

  return (
    <div>
        <h3 className="text-xl mb-6 font-semibold">My Account</h3>
      <div className="flex items-center flex-wrap gap-6">
        {accountDetails.map((item: any) => {
          if(item.title !== "Logout"){
            return (
              <Link  href={item.href} key={item.id} className="flex items-center gap-2 p-3.5 rounded-md border cursor-pointer border-border bg-white hover:shadow-md  transition-all">
                <Icon
                  icon={item.icon}
                  className="text-6xl text-primary"
                />
                <div className="flex flex-col ">
                  <h2 className="text-base font-semibold">{item.title}</h2>
                  <p className="text-sm font-medium">{item.subtitle}</p>
                </div>
              </Link>
            )
          }else{
            return (
              <button onClick={signOutHandler} key={item.id} className="flex items-center gap-2 p-3.5 rounded-md border cursor-pointer border-border bg-white hover:shadow-md  transition-all">
                <Icon
                  icon={item.icon}
                  className="text-6xl text-primary"
                />
                <div className="flex flex-col ">
                  <h2 className="text-base font-semibold">{item.title}</h2>
                  <p className="text-sm font-medium">{item.subtitle}</p>
                </div>
              </button>
            )
          }
        })}
      </div>
    </div>
  );
};

export default MyAccount;

