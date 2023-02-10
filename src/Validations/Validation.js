import * as yup from "yup"

export const userSchema = yup.object({
        firstname: yup.string().required("First Name is required"),
        lastname: yup.string().optional(),
        streetHosueNo: yup.string().required( "street house no is required"),
        apartment: yup.string().optional(),
        postalCode: yup.string().required("Postal Code is required"),
        city: yup.string().required( "City is required" ),
        phoneNo: yup.number()
});
