"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import ShippingAddress from "./ShippingAddress"
import { useState } from "react"


const AddAddressDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen} >
    <DialogTrigger asChild>
    <div className={`w-full my-6 h-40 flex items-center justify-center group shadow-md rounded-lg cursor-pointer`} >
       <div className="flex flex-col items-center gap-1">
       <Icon icon="simple-line-icons:plus" className="text-5xl text-dark/70 group-hover:text-dark/90" />
       <p className="text-sm font-medium">Add new address</p>
       </div>
    </div>
    </DialogTrigger>
    <DialogContent className="max-w-4xl max-h-[calc(100vh_-_50px)] overflow-y-auto" >
      <DialogHeader>
        <DialogTitle className="text-center text-lg font-semibold pb-5 leading-normal" >Add Shipping Address</DialogTitle>
        <DialogDescription asChild>
           <ShippingAddress open={open} handleOpen={setOpen} />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default AddAddressDialog
