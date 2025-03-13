
import React, { useContext } from "react";
import { UserContext } from "@/app/context/users/UserContext";
import {  Loader2 } from "lucide-react";
import ChangeAddressDialog from "../../manage-address/ChangeAddressDialog";

const ShippingAddress = () => {
  const {activeShippingAddress} = useContext(UserContext);
  return (
    <div>
      <h4 className=" text-xl font-semibold my-8 mb-5">Shipping Address</h4>
      <div className="py-3 px-4 border border-border rounded-md">
        <div className="flex justify-between gap-6 items-center pb-3 border-b border-border">
          <div className="flex gap-10">
            <span className="text-gray-600 text-sm min-w-16">Contact</span>
            <div className="text-dark text-sm font-medium">
              {activeShippingAddress.phone ? activeShippingAddress.phone :  <Loader2 className="animate-spin text-gray-200" />}
            </div>
          </div>
           <ChangeAddressDialog/>
        </div>
        <div className="flex justify-between gap-6 items-center py-3">
          <div className="flex gap-10">
            <span className="text-gray-600 text-sm text-nowrap min-w-16">
              Ship to
            </span>
            <div className="text-dark text-sm font-medium">
              {activeShippingAddress.street ? `${activeShippingAddress.flat} , ${activeShippingAddress.street} , ${activeShippingAddress.zipCode} ${activeShippingAddress.city} ${activeShippingAddress.state} , ${activeShippingAddress.country}` :  <Loader2 className="animate-spin text-gray-200" />}
            </div>
          </div>
          <ChangeAddressDialog/>
        </div>
        <div className="flex justify-between gap-6 items-center pt-3 border-t border-border">
            <div className="flex gap-10">
              <span className="text-gray-600 text-sm max-w-16">Shipping method</span>
              <p className="text-dark text-sm font-medium">
              Free Shipping (Pay Online) · <span className="text-dark font-semibold" >Free</span>
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
