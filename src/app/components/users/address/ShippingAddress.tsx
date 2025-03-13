"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useFormik, ErrorMessage } from "formik";
import { addressSchema } from "./schemas";
import { UserContext } from "@/app/context/users/UserContext";
import { Loader2 } from "lucide-react";
import { Button } from "../../ui/button";

const ShippingAddress = ({ handleOpen }: any) => {
  const initialValues = useMemo(
    () => ({
      country: "Bharat",
      firstName: "",
      lastName: "",
      street: "",
      zipCode: "",
      phone: "",
      flat: "",
      state: "",
      city: "",
      isDefault: false,
    }),
    []
  );

  const { userId } = useContext(UserContext);
  const {
    getShippingAddresses,
    setTrackIsDefaultAddress,
    userShippingAddress,
  } = useContext(UserContext);
  const [isAddressLoading, setIsAddressLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  let [activeField, setActiveField] = useState<string[]>([]);

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    dirty,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: addressSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values, action) => {
      addUserAddress(values);
      action.resetForm();
    },
  });

  const addUserAddress = async (userAddress: any) => {
    try {
      if (userId) {
        setIsAddressLoading(true);
        setCounter(1);
        const userAddressResponse = await fetch("/api/users/address", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ address: userAddress, userId: userId }),
        });
        const userAddressInfo = await userAddressResponse.json();
        await getShippingAddresses(userId);
        if (userAddressInfo.data.isDefault && userShippingAddress.length >= 1) {
          console.log(userAddressInfo);
          setTrackIsDefaultAddress(userAddressInfo.data.id);
        }
        setCounter(2);
        setIsAddressLoading(false);
        console.log(userAddressInfo);
      } else {
        alert("User must be logged in");
      }
    } catch (error) {
      console.log("Failed to add new shipping address", error);
    }
  };

  useEffect(() => {
    if (counter > 1) {
      handleOpen(false);
    }
    console.log(errors);
    console.log(activeField);
  }, [counter, errors, activeField]);

  return (
    <div className="w-full">
      {/* Address forms */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (activeField.length === 1) {
            setActiveField([
              ...activeField,
              "firstName",
              "lastName",
              "street",
              "flat",
              "country",
              "city",
              "zipcode",
              "phone",
              "state",
            ]);
          }
          handleSubmit();
        }}
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-6 col-span-12">
            <input
              type="text"
              name="firstName"
              className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${
                errors.firstName &&
                activeField.some((item) => item === "firstName")
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
              placeholder="First name"
              value={values.firstName}
              onChange={handleChange}
              onFocus={() => {
                setActiveField([...activeField, "firstName"]);
              }}
            />
            {errors.firstName &&
            activeField.some((item) => item === "firstName") ? (
              <p className="text-sm font-normal text-red-500">
                {errors.firstName}
              </p>
            ) : null}
          </div>
          <div className="lg:col-span-6 col-span-12">
            <input
              type="text"
              name="lastName"
              className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${
                errors.lastName &&
                activeField.some((item) => item === "lastName")
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
              placeholder="Last name"
              value={values.lastName}
              onChange={handleChange}
              onFocus={() => {
                setActiveField([...activeField, "lastName"]);
              }}
            />
            {errors.lastName &&
            activeField.some((item) => item === "lastName") ? (
              <p className="text-sm font-normal text-red-500">
                {errors.lastName}
              </p>
            ) : null}
          </div>
          <div className="col-span-12">
            <input
              type="text"
              name="street"
              className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${
                errors.street && activeField.some((item) => item === "street")
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
              placeholder="Address"
              value={values.street}
              onChange={handleChange}
              onFocus={() => {
                setActiveField([...activeField, "street"]);
              }}
            />
            {errors.street && activeField.some((item) => item === "street") ? (
              <p className="text-sm font-normal text-red-500">
                {errors.street}
              </p>
            ) : null}
          </div>
          <div className="col-span-12">
            <input
              type="text"
              name="flat"
              className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${
                errors.flat && activeField.some((item) => item === "flat")
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
              placeholder="Apartment, suite, etc (optional)"
              value={values.flat}
              onChange={handleChange}
              onFocus={() => {
                setActiveField([...activeField, "flat"]);
              }}
            />
            {errors.flat && activeField.some((item) => item === "flat") ? (
              <p className="text-sm font-normal text-red-500">{errors.flat}</p>
            ) : null}
          </div>
          <div className="col-span-12">
            <select
              name="country"
              value={values.country}
              onFocus={(e) => {
                setActiveField([...activeField, "country"]);
              }}
              onChange={handleChange}
              className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${
                errors.country && activeField.some((item) => item === "country")
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
            >
              <option>Country/region</option>
              <option value="Bharat">Bharat</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="China">China</option>
            </select>
            {errors.country &&
            activeField.some((item) => item === "country") ? (
              <p className="text-sm font-normal text-red-500">
                {errors.country}
              </p>
            ) : null}
          </div>
          <div className="lg:col-span-6 col-span-12">
            <input
              type="text"
              name="zipCode"
              className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${
                errors.zipCode && activeField.some((item) => item === "zipcode")
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
              placeholder="Pincode"
              value={values.zipCode}
              onChange={handleChange}
              onFocus={() => {
                setActiveField([...activeField, "zipcode"]);
              }}
            />
            {errors.zipCode &&
            activeField.some((item) => item === "zipcode") ? (
              <p className="text-sm font-normal text-red-500">
                {errors.zipCode}
              </p>
            ) : null}
          </div>
          <div className="lg:col-span-6 col-span-12">
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              onFocus={() => {
                setActiveField([...activeField, "city"]);
              }}
              className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${
                errors.city && activeField.some((item) => item === "city")
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
              placeholder="City"
            />
            {errors.city && activeField.some((item) => item === "city") ? (
              <p className="text-sm font-normal text-red-500">{errors.city}</p>
            ) : null}
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div>
              <div className="flex rounded-lg ">
                <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-border bg-gray-200/70 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                  <Icon icon="f7:phone" className="text-xl" />
                </span>
                <input
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onFocus={() => {
                    setActiveField([...activeField, "phone"]);
                  }}
                  className={`py-3 px-4 block w-full border-border rounded-e-lg border focus:border  text-sm ${
                    errors.phone && activeField.some((item) => item === "phone")
                      ? "border-red-500 focus:border-red-500"
                      : "border-border focus:border-primary"
                  } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
                />
              </div>
              {errors.phone && activeField.some((item) => item === "phone") ? (
                <p className="text-sm font-normal text-red-500">
                  {errors.phone}
                </p>
              ) : null}
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <select
              name="state"
              value={values.state}
              onFocus={(e) => {
                setActiveField([...activeField, "state"]);
              }}
              onChange={handleChange}
              className={`py-3 px-4 block w-full rounded-lg border text-dark  text-sm ${
                errors.state && activeField.some((item) => item === "state")
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              } focus:outline-0 focus:ring-primary placeholder:text-gray-600`}
            >
              <option>State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Delhi">Delhi</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            </select>
            {errors.state && activeField.some((item) => item === "state") ? (
              <p className="text-sm font-normal text-red-500">{errors.state}</p>
            ) : null}
          </div>
        </div>
        <div className="flex mt-3">
          <input
            type="checkbox"
            name="isDefault"
            checked={values.isDefault}
            onChange={handleChange}
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
        <Button
          type="submit"
          disabled={isAddressLoading}
          className="bg-secondary mt-8 hover:bg-secondary/90 text-[15px] font-semibold py-3 px-7 h-fit rounded-md text-white"
        >
          <Loader2
            className={`animate-spin ${isAddressLoading ? "block" : "hidden"}`}
          />
          Submit Address
        </Button>
      </form>
    </div>
  );
};

export default ShippingAddress;
