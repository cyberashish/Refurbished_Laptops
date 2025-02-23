






import { Icon } from "@iconify/react";
import {v4 as uuidv4} from "uuid"
import { useMemo } from "react";
import { Button } from "@/app/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfileDropdown = () => {

  const {data:session} = useSession();
  const router = useRouter();

  const signOutHandler = () => {
    signOut({ callbackUrl: "/auth/login" });
} 

  const userProfileItems = useMemo(() => [
    {
       id: uuidv4(),
       title: "My Profile",
       subtitle: "Edit your basic detail",
       icon : "mage:user"
    },

    {
       id: uuidv4(),
       title: "My Address",
       subtitle: "Manage your saved addresses",
       icon : "ph:address-book-light"
    },
    {
      id: uuidv4(),
      title: "My Orders",
      subtitle: "View , order , cancel order and buy again",
      icon : "solar:box-outline"
   },
    {
       id: uuidv4(),
       title: "My wishlist",
       subtitle: "Have a look at your favourite products",
       icon : "fluent:heart-32-regular"
    },
] , [])

  return (
    <div>
   <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
   <div className="after:w-10 after:h-10 after:rounded-full relative after:absolute cursor-pointer hs-dropdown-open:after:bg-primary/10 hover:after:bg-primary/10 after:top-1/2 after:-translate-y-1/2 after:start-1/2 after:-translate-x-1/2 group" >
      <Icon icon="solar:user-outline" className="text-2xl group-hover:text-primary hs-dropdown-open:text-primary cursor-pointer rounded-full text-muted" />
      </div>
  <div
    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="hs-dropdown-hover-event"
  >
        <div className="py-4 px-5">

        <div className="flex flex-col gap-3">
           {
             userProfileItems.map((item) => {
                return (
                   <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                    <Icon icon={item.icon} className="text-2xl text-dark group-hover:text-primary" />
                    <div className="flex flex-col gap-0">
                      <h4 className="text-sm font-medium group-hover:text-primary">{item.title}</h4>
                      <p className="text-xs group-hover:text-primary">{item.subtitle}</p>
                    </div>
                   </div>
                )
             })
           }
        </div> 
         {
           session ?  <Button onClick={signOutHandler}  className="w-full border text-sm leading-none mt-7 py-3 h-fit text-center bg-primary hover:bg-primary/80 text-white"  >
           Logout
         </Button> : <Button onClick={() => router.push("/auth/login")} className="w-full border text-sm leading-none mt-7 py-3 h-fit text-center bg-primary hover:bg-primary/80 text-white"  >
            Login
         </Button>
         }
        </div>
  </div>
</div>
   
    </div>
  )
}

export default ProfileDropdown

