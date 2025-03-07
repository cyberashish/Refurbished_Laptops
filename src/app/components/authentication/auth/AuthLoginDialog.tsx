import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import AuthForm from "../authforms/AuthForm";

const AuthLoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-3.5 py-1.5 border bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
          Move to Wishlist
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-center leading-normal invisible">
            Are you absolutely sure want to delete this item?
          </DialogTitle>
          <DialogDescription asChild>
            <AuthForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AuthLoginDialog;
