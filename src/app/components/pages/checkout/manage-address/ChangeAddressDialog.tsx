"use state"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { useState } from "react";
import AllShippingAddresses from "./AllShippingAddresses";


const ChangeAddressDialog = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
          <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
    <p className="text-dark hover:text-secondary font-medium text-xs cursor-pointer" >Change</p>
    </DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[calc(100vh_-_50px)] overflow-y-auto" >
      <DialogHeader>
      <DialogTitle className="text-center text-lg font-semibold pb-5 leading-normal" >All Shipping Address</DialogTitle>
        <DialogDescription asChild>
           <AllShippingAddresses/>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
    </div>
  )
}

export default ChangeAddressDialog
