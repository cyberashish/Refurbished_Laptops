import * as Yup from 'yup';

export const addressSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Please enter your first name"),
    lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
    street: Yup.string().min(2).max(200).required("Please enter your address"),
    zipCode:Yup.string().min(3).max(10).required("Please enter your pincode"),
    country:Yup.string().min(3).max(10).required("Please enter your country"),
    phone:Yup.string().min(10).max(10).required("Please enter your phone number"),
    flat:Yup.string().min(2).max(25),
    city:Yup.string().min(2).max(20).required("Please enter your city"),
    state:Yup.string().min(2).max(20).required("Please enter your state"),
    isDefault:Yup.boolean(),
})