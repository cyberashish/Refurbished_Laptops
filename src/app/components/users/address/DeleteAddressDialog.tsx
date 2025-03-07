import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../../ui/button";
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import { UserContext } from "@/app/context/users/UserContext";

const DeleteAddressDialog = ({addressInfo}:any) => {
  const [isLoading , setIsLoading] = useState(false);
   const {userId,getShippingAddresses} = useContext(UserContext);

  const removeAddressItem = async (addressId:string) => {
      try{
         setIsLoading(true);
         const deletedAddressItemResponse =  await fetch("/api/users/address" , {
          method: "DELETE",
          headers:{'Content-Type' : 'application/json'},
          body: JSON.stringify({addressId:addressId})
         });
         const deletedItem = await deletedAddressItemResponse.json();
         console.log(deletedItem);
         await getShippingAddresses(userId);
         setIsLoading(false);

      }catch(error){
        console.log("failed to delete address item" , error)
      }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="shrink-0 relative before:absolute before:w-9 before:h-9 before:rounded-full before:top-1/2 before:-translate-y-1/2 text-red-500 hover:text-white hover:before:bg-red-500 before:bg-red-500/20 before:start-1/2 before:-translate-x-1/2">
          <Icon icon="tabler:trash" className="text-xl relative z-50" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <Icon
            icon="cuida:alert-outline"
            className="text-6xl mb-5 text-red-500 mx-auto"
          />
          <DialogTitle className="text-center leading-normal">
            Are you absolutely sure want to delete this item?
          </DialogTitle>
          <DialogDescription asChild>
            <DialogDescription asChild>
              <div className="flex items-center justify-center gap-2 pt-3">
                <Button
                  onClick={() => removeAddressItem(addressInfo.id)}
                  disabled={isLoading}
                  className="px-3.5 py-1.5  bg-red-500  text-white hover:bg-red-600 hover:text-white"
                >
                  <Loader2
                    className={`animate-spin ${
                      isLoading ? "block" : "hidden"
                    }`}
                  />
                  Remove
                </Button>
                <DialogClose asChild>
                  <Button className="px-3.5 py-1.5 border bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </DialogDescription>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAddressDialog;
