"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useState } from "react"
import EditableShippingAddress from "./EditableShippingAddress";


const EditAddressDialog = ({addressInfo}:any) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
    <button className="shrink-0 relative before:absolute before:w-9 before:h-9 before:rounded-full before:top-1/2 before:-translate-y-1/2 text-secondary hover:text-white hover:before:bg-secondary before:bg-secondary/20 before:start-1/2 before:-translate-x-1/2" >
                    <Icon icon='tabler:edit' className="text-xl relative z-50" />
    </button>
    </DialogTrigger>
    <DialogContent className="max-w-6xl max-h-[calc(100vh_-_50px)] overflow-y-auto" >
      <DialogHeader>
      <DialogTitle className="text-center text-lg font-semibold pb-5 leading-normal" >Edit Shipping Address</DialogTitle>
        <DialogDescription asChild>
        <EditableShippingAddress addressInfo={addressInfo} handleOpen={setOpen} />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default EditAddressDialog
