"use client"


import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export type AddressType = {
    userId: string;
    street: string;
    flat?: string;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    phone: string;
  };

  interface ActiveAdressType {
    id?:string
    street: string;
    flat?: string;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    phone: string;
  }

  let initialActiveAddressProps = {
    id:"",
    street: "",
    flat: "",
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    phone: "",
  }

  

interface userContextProps {
    userShippingAddress : AddressType[],
    userId: string,
    getShippingAddresses:  (userId:string,isDefault?:boolean) => Promise<void>,
    handleDefaultUpdate:  (addressId:string) => Promise<void>,
    isUserShippingAddressLoading: boolean,
    trackIsDefaultAddress: string,
    setTrackIsDefaultAddress: (value:string) => void,
    activeShippingAddress: ActiveAdressType,
    setActiveShippingAddres: (value:ActiveAdressType) => void,
    userOrders: any[],
    setUserOrders: (value:any[]) => void
}

const initialProductProp = {
    userShippingAddress : [],
    userId: "",
    getShippingAddresses: async () => {},
    isUserShippingAddressLoading: true,
    trackIsDefaultAddress: "",
    setTrackIsDefaultAddress: () => {},
    handleDefaultUpdate: async () => {}, 
    activeShippingAddress: {...initialActiveAddressProps},
    setActiveShippingAddres: () => {},
    userOrders: []
,   setUserOrders: () => {},
}



export const UserContext = createContext<userContextProps>(initialProductProp);

export const UserContextProvider = ({children}:{children: React.ReactNode}) => {
    const [userShippingAddress , setUserShippingAddress] = useState<AddressType[]>([]);
    const [userId , setUserId] = useState("");
    const {data:session } = useSession();
    const [isUserShippingAddressLoading , setIsUserShippingAddressLoading] = useState(true);
    const [trackIsDefaultAddress , setTrackIsDefaultAddress] = useState("");
    const [activeShippingAddress , setActiveShippingAddres] = useState<ActiveAdressType>(initialActiveAddressProps);
    const [userOrders , setUserOrders] = useState<any[]>([]);


   
    const getUser = async () => {
        try{
          if(session){
            const userResponse = await fetch("/api/users/email" , {
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({email:session?.user?.email})
            });
            const {user} = await userResponse.json();
            console.log(user.id);
            setUserId(user.id);
          }else{
            console.log("Failed to fetch user");
          }
        }catch(error){
            console.log("Failed to get user at userContext" , error)
        }
    }

    const handleDefaultUpdate = async (addressId:string) => {
       try{
           userShippingAddress.forEach(async (item:any) => {
               if(item.id !== addressId){
                const updatedResponse =  await fetch("/api/users/address/default" , {
                  method:"PATCH",
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify({addressId:item.id,isDefault:false})
                 });
                 const updatedAddress = await updatedResponse.json();
                 console.log(updatedAddress,"mine");
                  await getShippingAddresses(userId);
               }
           })
         
       }catch(error){
       console.log("Failed to update default tick",error)
       }
    }


    const getShippingAddresses = async (userId:any,_isDefault:boolean=false) => {
        try{
            if(session && userId){
                const shippingAddressesResponse = await fetch("/api/users/address/get-addresses" , {
                    method: "POST",
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({userId})
                  });
                  const shippingAddresses = await shippingAddressesResponse.json();
                  setUserShippingAddress(shippingAddresses.data);
                  setIsUserShippingAddressLoading(false);
            }else{
              console.log("Not a valid userId")
            }
        }catch(error){
            console.log("Failed to get shipping addresses at userContext" , error)
        }
    }

    const handleUserAction = async () => {
          await getUser();
          await getShippingAddresses(userId);
    }

    useEffect(() =>{
      handleUserAction();
      if(trackIsDefaultAddress){
        handleDefaultUpdate(trackIsDefaultAddress)
      }
    },[session,userId,trackIsDefaultAddress]) 

    return (
        <>
         <UserContext.Provider value={
            {
                userShippingAddress,
                userId,
                getShippingAddresses,
                isUserShippingAddressLoading,
                trackIsDefaultAddress,
                setTrackIsDefaultAddress,
                handleDefaultUpdate,
                activeShippingAddress,
                setActiveShippingAddres,
                userOrders,
                setUserOrders
            }
         } >
            {children}
         </UserContext.Provider>
        </>
    )
}