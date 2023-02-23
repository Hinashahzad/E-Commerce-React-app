
import * as yup from "yup"

export const userSchema = yup.object( {
        email: yup.string().email().required().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        country:yup.string().required(),
        firstname: yup.string().required( "First Name is required" ),
        lastname: yup.string().optional(),
        streetHosueNo: yup.string().required( "Street house no is required" ),
        apartment: yup.string().optional(),
        postalCode: yup.string().length( 5 )
                .matches( /^[0-9]+$/, "Must be only digits" )
                .required().min( 5, "Minimum 4 digits" )
                .max( 5, "Not more than 5 digits" ),
        city: yup.string().required( "City is required" ),
        phoneNo: yup.string().matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
                , "Phone number is not valid" ),
} );
export const LoginSchema = yup.object( {
        email: yup.string().email().required().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        password: yup.string().required(),
} );
export const UserRegistrationSchema = yup.object( {
       firstname: yup.string().required( "First Name is required" ),
        lastname: yup.string().optional(),
        email: yup.string().email().required().matches( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ),
        password:yup.string().required().min(4, "Minimum Password Length is 4 digit").max(10, "Maximum Password Length is 10 digit"),
} )



