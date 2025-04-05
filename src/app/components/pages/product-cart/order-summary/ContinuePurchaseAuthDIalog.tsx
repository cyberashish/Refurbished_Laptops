import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import { Button } from "@/app/components/ui/button";
import AuthForm from "@/app/components/authentication/authforms/AuthForm";



const ContinuePurchaseAuthDIalog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='py-2.5 block font-medium text-sm text-center px-3 rounded-md bg-primary hover:bg-primary/80 text-white h-fit'>
          Continue Purchase
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-center leading-normal invisible">
              You must need to login!
          </DialogTitle>
          <DialogDescription asChild>
            <AuthForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContinuePurchaseAuthDIalog;
