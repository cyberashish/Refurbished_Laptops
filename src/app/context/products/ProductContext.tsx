"use client"

import { Product } from "@/app/components/pages/home/refurbished-laptops/ProductCard";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";


interface CouponType {
  id: string,
  code: string ,
  discount: number,
  countUsed?: number
}

interface UsedCoupon{
  activeCoupon : string,
  usedCount: number,
  discount: number
}



interface productContextProps {
    productQuantity : number,
    setProductQuantity : (value:number) => void,
    persistCartItems : Product[],
    setPersistCartItems : (data:Product[]) => void,
    allProducts: Product[],
    isCartItemsLoading: boolean,
    totalPrice: number,
    setTotalPrice: (value:any) => void,
    allCoupons: CouponType[],
    activeCouponCode:string,
    setActiveCouponCode: (value:string) => void, 
    setAllCoupons: (value:CouponType[]) => void, 
    usedCoupons: UsedCoupon[],
    setUsedCoupons: (value:UsedCoupon[]) => void, 
    removeCartItem : (cartItemId:string) => Promise<void>,
    updateCartQuantity : (operation:string,cartItemId:string) => Promise<void>,
    allWishListItems:any[],
    setWishListItems: (items:any[]) => void,
    deliveryCharge: number,
    setDeliveryCharge: (value:number) => void,
    paymentMethod: string,
    setPaymentMethod: (value:string) => void,
    taxes: number,
    setTaxes: (value:number) => void
}

const initialProductProp = {
    productQuantity : 0,
    setProductQuantity : () => {},
    persistCartItems:[],
    setPersistCartItems : () => {},
    allProducts : [],
    isCartItemsLoading: true,
    totalPrice: 0,
    setTotalPrice: () => {},
    allCoupons:[],
    activeCouponCode:"",
    setActiveCouponCode : () => {},
    setAllCoupons : () => {},
    usedCoupons: [],
    setUsedCoupons: () => {},
    removeCartItem: async () => {},
    updateCartQuantity: async () => {},
    allWishListItems:[],
    setWishListItems: () => {},
    deliveryCharge: 0,
    setDeliveryCharge: () => {},
    paymentMethod:"COD",
    setPaymentMethod: () => {},
    taxes: 0,
    setTaxes: () => {}  
}

export const ProductContext = createContext<productContextProps>(initialProductProp);

export const ProductContextProvider = ({children}:{children: React.ReactNode}) => {
    const [productQuantity , setProductQuantity] = useState(0);
    const [persistCartItems , setPersistCartItems] = useState<Product[]>([]);
    const [isCartItemsLoading , setisCartItemsLoading] = useState<boolean>(true);
    const [allProducts , setAllProducts] = useState<Product[]>([]);
    const [totalPrice , setTotalPrice] = useState(0);
    const [allCoupons , setAllCoupons] = useState<CouponType[]>([]);
    const [activeCouponCode , setActiveCouponCode] = useState("ENTER COUPON");
    const [usedCoupons , setUsedCoupons] = useState<UsedCoupon[]>([]);
    const [allWishListItems , setWishListItems] = useState<any[]>([]);
    const [deliveryCharge , setDeliveryCharge] = useState(0);
    const [paymentMethod , setPaymentMethod] = useState("COD");
    const [taxes , setTaxes] = useState(0);

    const {data:session} = useSession();

    const handleAllProducts = async () => {
         try{
           const response = await fetch("/api/products");
           const result = await response.json();
           setAllProducts(result);
         }catch(error){
            console.log(error,"Failed to fetch all products",error)
         }
    }
    
    const removeCartItem = async (cartItemId:string) => {
      if(!session){
        const cartInfo = localStorage.getItem("cart");
        if (cartInfo && allProducts) {
          let cartItems = JSON.parse(cartInfo);
          const remainingLocalCartItems = cartItems.filter((item: any) => {
            return item.productId !== cartItemId;
          });
          let remainingCartItems: Product[] = [];
    
          allProducts.forEach((product) => {
            remainingLocalCartItems.forEach((item: any) => {
              if (item.productId === product.id) {
                remainingCartItems.push(product);
              }
            });
          });
          setPersistCartItems(remainingCartItems);
          localStorage.setItem("cart", JSON.stringify(remainingLocalCartItems));
        }
      }else{
            try{
              const cartItemResponse = await fetch("/api/users/cart/delete" , {
                method: "DELETE",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({cartItemId:cartItemId})
              });
              const result = await cartItemResponse.json();
              console.log(result);
            }catch(error:any){
              console.log("Error while deleting the cart-item" , error.message)
            }
  
           try{
            const userCartResponse = await fetch("/api/users/cart/user-specific-cart" , {
              method : "POST",
              headers : {'Content-Type' : 'application/json'},
              body: JSON.stringify({email:session.user?.email})
            });
            const userCartInfo = await userCartResponse.json();
            if(userCartInfo){
              let cartItems =  userCartInfo.data[0].cart;
              setPersistCartItems(cartItems);
             }
           }catch(error:any){
            console.log("Error while fetching the cart-items" , error.message)
           }
      }
    };

    const updateCartQuantity = async (cartItemId:string,operation:string ,) => {
      if(!session){
        const cartInfo = localStorage.getItem("cart");
        if (cartInfo && allProducts) {
          let cartItems = JSON.parse(cartInfo);
          const modifiedCartItems = cartItems.map((item: any) => {
             if(item?.productId == cartItemId){
                if(operation === "increment"){
                  return {...item , quantity: item.quantity + 1}
                }else{
                  if(item.quantity>1){
                    return {...item , quantity: item.quantity - 1}
                  }else{
                    return item
                  }
                }
             }else{
                return item
             }
          });
          let updatedCartItems: Product[] = [];
    
          allProducts.forEach((product:any) => {
            modifiedCartItems.forEach((item: any) => {
              if (item.productId === product.id) {
                updatedCartItems.push({...product,quantity:item.quantity});
              }
            });
          });
          setPersistCartItems(updatedCartItems);
          localStorage.setItem("cart", JSON.stringify(modifiedCartItems));
        }
      }else{
            try{
              const cartItemResponse = await fetch("/api/users/cart/update-quantity" , {
                method: "PATCH",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({cartItemId:cartItemId,operation})
              });
              const result = await cartItemResponse.json();
              console.log(result);
            }catch(error:any){
              console.log("Error while updating the cart-item" , error.message)
            }
  
           try{
            const userCartResponse = await fetch("/api/users/cart/user-specific-cart" , {
              method : "POST",
              headers : {'Content-Type' : 'application/json'},
              body: JSON.stringify({email:session.user?.email})
            });
            const userCartInfo = await userCartResponse.json();
            if(userCartInfo){
              let cartItems =  userCartInfo.data[0].cart;
              setPersistCartItems(cartItems);
             }
           }catch(error:any){
            console.log("Error while fetching the cart-items" , error.message)
           }
      }
    }

    const handleDbStorage = async () => {
       try{
        if(session){
          const localStorageCartItems = localStorage.getItem("cart");
          const cartItems = JSON.parse(localStorageCartItems!);
          
          if(cartItems){
            try{
              const response = await fetch("/api/users/email" , {
                method: "POST",
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify({email:session?.user?.email})
              });
              const {user} = await response.json();
      
              if(user){
                let modifiedCartItems = cartItems.map((item:any) => {
                  return {...item , userId:user.id}
               });
    
               try{
                const cartResponse = await fetch("/api/users/cart/add-to-cart" , {
                  method: "POST",
                  headers:{'Content-Type' : 'application/json'},
                  body: JSON.stringify({userId:user.id , cartItems:modifiedCartItems})
                });
                const cartResult = await cartResponse.json();
                setPersistCartItems(cartResult.data);
                setisCartItemsLoading(false);
                localStorage.setItem("cart" ,"[]");
               }catch(error:any){
                console.log("Failed to do add to cart Items operation at product context",error.message)
               }
           
              }
            }catch(error:any){
              console.log("Failed to get user at product context",error.message)
            }
          }
    
        }
       }catch(error){
        console.log("Failed to do storage action")
       }
    }
    
    const handleCoupons = async () => {
      try{
       const allCouponsResponse = await fetch("/api/coupons");
       const allCoupons = await allCouponsResponse.json();
       setAllCoupons(allCoupons.data);
      }catch(error){
       console.log("Failed to fetch all coupons",error)
      }
  }

     useEffect(() => {
       handleAllProducts();
       handleDbStorage();
     },[session]);

     useEffect(() =>{
       if(persistCartItems){
        handleCoupons()
       }
     },[persistCartItems])

    //  Handle cart-items change effect

    const handleCartItemsEffect = () => {
      let accumulatedDiscountedPrice = 0;
      if(persistCartItems){
        persistCartItems?.forEach((item:any) => {
          accumulatedDiscountedPrice = accumulatedDiscountedPrice + (Number(item?.laptop?.pricing?.discountedPrice?.replaceAll(",",""))*item.quantity);
      });
        const productPricesAfterTaxation = accumulatedDiscountedPrice;
        console.log(productPricesAfterTaxation,"bahega",totalPrice,);
        localStorage.setItem("totalPrice" , `${productPricesAfterTaxation}`);
        localStorage.setItem("couponCode" , "ENTER COUPON");
        setTotalPrice(productPricesAfterTaxation);
        setActiveCouponCode("ENTER COUPON");
        setUsedCoupons([]);
      }
    }

    useEffect(() => {
      handleCartItemsEffect();
    },[persistCartItems])

    //  let accumulatedDiscountedPrice = 0;
    //  const [hasrrun , setHasrun] = useState(false);
   
    //  useEffect(() => {
    //      if(hasrrun){
    //        if(persistCartItems){
    //           persistCartItems?.forEach((item:any) => {
    //             accumulatedDiscountedPrice = accumulatedDiscountedPrice + (Number(item?.laptop.pricing?.discountedPrice?.replaceAll(",",""))*item.quantity);
    //         });
    //           const productPricesAfterTaxation = accumulatedDiscountedPrice;
    //           console.log(productPricesAfterTaxation,"bahega",totalPrice,"jai shree ram",hasrrun)
    //           setTotalPrice(productPricesAfterTaxation);
    //         }
    //      }else{
    //        console.log("jai shree krishna",hasrrun)
    //      };
    //      setHasrun(true)
    //  },[hasrrun]);

    return (
        <>
         <ProductContext.Provider value={
            {
                productQuantity,
                setProductQuantity,
                persistCartItems,
                setPersistCartItems,
                allProducts,
                isCartItemsLoading,
                totalPrice,
                setTotalPrice,
                allCoupons,
                activeCouponCode,
                setActiveCouponCode,
                setAllCoupons,
                usedCoupons,
                setUsedCoupons,
                removeCartItem,
                updateCartQuantity,
                allWishListItems,
                setWishListItems,
                deliveryCharge,
                setDeliveryCharge,
                paymentMethod,
                setPaymentMethod,
                taxes,
                setTaxes
            }
         } >
            {children}
         </ProductContext.Provider>
        </>
    )
}