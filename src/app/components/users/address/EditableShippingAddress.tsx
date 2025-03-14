"use client"

import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useContext, useEffect, useState} from 'react';
import {useFormik} from "formik";
import { addressSchema } from './schemas';
import { UserContext } from '@/app/context/users/UserContext';
import { Loader2 } from 'lucide-react';
import { Button } from '../../ui/button';




const EditableShippingAddress = ({handleOpen,addressInfo}:any) => {

    const initialValues = {
        country: `${addressInfo.country}`,
        firstName:`${addressInfo.firstName}`,
        lastName:`${addressInfo.lastName}`,
        street:`${addressInfo.street}`,
        zipCode:`${addressInfo.zipCode}`,
        phone:`${addressInfo.phone}`,
        flat:`${addressInfo.flat}`,
        state:`${addressInfo.state}`,
        city:`${addressInfo.city}`,
        isDefault:addressInfo.isDefault,
      }


    const {userId} = useContext(UserContext);
    const {getShippingAddresses , handleDefaultUpdate} = useContext(UserContext);
    const [isAddressLoading , setIsAddressLoading] = useState(false);
    const [counter , setCounter] = useState(0);



  const {values, errors , handleBlur , touched, handleChange , handleSubmit} =  useFormik({
      initialValues: initialValues,
      validationSchema: addressSchema,
      onSubmit: async (values) => {
         if(values.isDefault){
            await handleDefaultUpdate(addressInfo.id);
         }
        await updateUserAddress(values);
        // action.resetForm();
        
      }
    });

    const updateUserAddress = async (userAddress:any) => {
      try{
           if(userId){
            setIsAddressLoading(true);
            setCounter(1);
            const userAddressResponse = await fetch("/api/users/address" , {
              method: "PATCH",
              headers: {'Content-Type' : 'application/json'},
              body: JSON.stringify({address:userAddress, addressId : addressInfo.id})
            });
             const updated =  await userAddressResponse.json();
             console.log(updated,"dhanya")
            await getShippingAddresses(userId);
            setCounter(2);
            setIsAddressLoading(false);
           }else{
            alert("User must be logged in");
           }
      }catch(error){
        console.log("Failed to add new shipping address",error)
      }
    }

    useEffect(() => {
       if(counter>1){
        handleOpen(false);
       }
    },[counter])
    
  return (
                <div className='w-full' >
                {/* Address forms */}
                <form onSubmit={handleSubmit} >
                <div className="grid grid-cols-12 gap-6">
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="text"
                      name='firstName'
                      className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${errors.firstName && touched.firstName ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                      placeholder="First name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName ? <p className='text-sm font-normal text-red-500' >{errors.firstName}</p>:null}
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="text"
                      name='lastName'
                      className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${errors.lastName && touched.lastName ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                      placeholder="Last name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                   {errors.lastName && touched.lastName ? <p className='text-sm font-normal text-red-500' >{errors.lastName}</p>:null}
                  </div>
                  <div className="col-span-12">
                    <input
                      type="text"
                      name="street"
                      className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${errors.street && touched.street ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                      placeholder="Address"
                      value={values.street}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.street && touched.street ? <p className='text-sm font-normal text-red-500' >{errors.street}</p>:null}
                  </div>
                  <div className="col-span-12">
                    <input
                      type="text"
                      name='flat'
                      className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${errors.flat && touched.flat ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                      placeholder="Apartment, suite, etc (optional)"
                      value={values.flat}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                   {errors.flat && touched.flat ? <p className='text-sm font-normal text-red-500' >{errors.flat}</p>:null}
                  </div>
                  <div className="col-span-12">
                    <select name="country" value={values.country}  onChange={handleChange}  onBlur={handleBlur} className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${errors.country && touched.country ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}>
                      <option  >Country/region</option>
                      <option value="India" >India</option>
                      <option value="USA" >USA</option>
                    </select>
                    {errors.country && touched.country ? <p className='text-sm font-normal text-red-500' >{errors.country}</p>:null}
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="text"
                      name='zipCode'
                      className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${errors.zipCode && touched.zipCode ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                      placeholder="Pincode"
                      value={values.zipCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.zipCode && touched.zipCode ? <p className='text-sm font-normal text-red-500' >{errors.zipCode}</p>:null}
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="text"
                      name='city'
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${errors.city && touched.city ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                      placeholder="City"
                    />
                    {errors.city && touched.city ? <p className='text-sm font-normal text-red-500' >{errors.city}</p>:null}
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <div>
                      <div className="flex rounded-lg ">
                        <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-border bg-gray-200/70 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                          <Icon icon="f7:phone" className="text-xl" />
                        </span>
                        <input
                          type="text"
                          name='phone'
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`py-3 px-4 block w-full border-border rounded-e-lg border focus:border  text-sm ${errors.phone && touched.phone ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                        />
                      </div>
                      {errors.phone && touched.phone ? <p className='text-sm font-normal text-red-500' >{errors.phone}</p>:null}
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="text"
                      name='state'
                      className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${errors.state && touched.state ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                      placeholder="State"
                      value={values.state} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.state && touched.state ? <p className='text-sm font-normal text-red-500' >{errors.state}</p>:null}
                  </div>
                </div>
                <div className="flex mt-3">
                  <input
                    type="checkbox"
                    name='isDefault'
                    checked={values.isDefault}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shrink-0 mt-0.5 border-border rounded text-lightbrown focus:outline-none checked:bg-lightbrown focus:ring-0 focus:ring-offset-0"
                    id="hs-default-checkbox2"
                  />
                  <label
                    htmlFor="hs-default-checkbox2"
                    className="text-sm ms-3 select-none cursor-pointer"
                  >
                    Save as default address
                  </label>
                </div>
                <Button type='submit' disabled={isAddressLoading} className="bg-secondary mt-8 hover:bg-secondary/90 text-[15px] font-semibold py-3 px-7 h-fit rounded-md text-white">
                <Loader2 className={`animate-spin ${isAddressLoading ? "block" : "hidden"}`}  />
                    Submit Address
                  </Button>
                </form>
                </div>   
  )
}

export default EditableShippingAddress
