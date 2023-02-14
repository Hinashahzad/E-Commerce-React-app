import React from 'react';
import { Divider, Form, Button} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { CountryDropdown } from "react-country-region-selector";
import { Link } from "react-router-dom";
import { useForm, Controller  } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from '../../Validations/Validation';
import { shippingDetails } from '../../Stores/action/ShippingDetailsAction';
export const ShippingAddressForm = () =>
{
    
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
    resolver: yupResolver(userSchema)
    } );
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = (data) =>
    {
        console.log( data );
        dispatch( shippingDetails( data ) );
        navigate("/Payment")
    }
    return ( <>
        {/**Continue as Guest */}
        <Form
            onSubmit={ handleSubmit( onSubmit ) } >
            <Form.Field>
            <input fluid
                type="email"
                name="email"
                placeholder='Email'
            {...register("email")}></input></Form.Field>
            {errors.email &&(<span style={ {
                        color:"red"} } >{errors.email.message}</span>) }    
            <Controller
            name="country"
            render={({ field: { name, onChange, value } }) => (
            <CountryDropdown
            defaultOptionLabel="Select Country"
            name={name}
            value={value}
            onChange={onChange}/>)}
            control={control}/>
            {errors.select &&(<span style={ {
                        color:"red"} } >{errors.select.message}</span>) }
            <Divider />
            
                <Form.Group widths='equal'>
                        <input fluid
                            placeholder='First name'
                            type='text'
                            name="firstname"
                            { ...register( "firstname" ) } />
                        {errors.firstname &&(<span style={ {
                        color:"red"} } >{errors.firstname.message}</span>) }
                               
                        <input fluid
                            placeholder='Last name'
                            type='text'
                            name="lastname"
                            { ...register( "lastname" ) } />
                        {errors.lastname &&(<span style={ {
                        color:"red"} } >{errors.lastname.message}</span>) }   
            </Form.Group>
            <Form.Field><input fluid
                        placeholder='Street and house number'
                        name="streetHosueNo"
                        type="text"
                        { ...register( "streetHosueNo")}/>
                       {errors.streetHosueNo &&(<span style={ {
                        color:"red"} } >{errors.streetHosueNo.message}</span>) }  </Form.Field>
            <Form.Field>  <input fluid
                        placeholder='Apartment, suit, etc. (optional)'
                        type="text"
                        name="apartment"
                        {...register("apartment")}/></Form.Field>
                  
                    
                <Form.Group widths='equal'>
                        <input fluid
                            placeholder='Postal Code'
                            name="postalCode"
                            type="text"
                            { ...register( "postalCode") } />
                    { errors.postalCode &&(<span style={ {
                        color:"red"} }>{errors.postalCode.message}</span>) }  
                        <input fluid
                            placeholder='City'
                            name="city"
                            type="text"
                            { ...register( "city") } />
                    { errors.city &&(<span style={ {
                        color:"red"} }>{errors.city.message}</span>) }  
            </Form.Group>
            <Form.Field> <input fluid
                        placeholder='Phone number'
                        type='number'
                        name="phoneNo"
                        { ...register( "phoneNo" ) } />
                    { errors.phoneNo && ( <span  style={ {
                        color:"red"} }>{ errors.phoneNo.message }</span> ) }  </Form.Field>
                   
                <div>
                    <Link to={ `/ShoppingCart` }><Button content='Back to cart' icon='pause' labelPosition='left' style={ { marginRight: "700px" } } /></Link>
                    <Button type='submit'> Continue</Button>
                </div>
            </Form>
    </> );
};


