import React,{useMemo} from 'react';
import { Divider, Form, Header, Button, Loader, Segment, Container, Message} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { countryValue } from '../../Stores/action/CountryValue';
import { Link } from "react-router-dom";
import { useForm, Controller  } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from '../../Validations/Validation';
export const ShippingAddressForm = () =>
{
    
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
    resolver: yupResolver(userSchema)
    } );
    const options = useMemo( () => countryList().getData(), [] )
    const value = useSelector( ( state ) => state.countryName );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const changeHandler = ( value ) =>
    {
        //setValue(value)
        dispatch( countryValue( value ) );
    }
    const onSubmit = (data) =>
    {
        console.log( data );
        navigate("/Payment")
    }
    return ( <>
        {/**Continue as Guest */}
        <Form
            onSubmit={ handleSubmit( onSubmit ) } >
            <input fluid
                type="email"
                name="email"
                placeholder='Email'
            {...register("email")}></input>
                
            <Controller
                    name="Select country"
                    control={control}
                    render={({ field }) => (
                    <Select
              // defaultValue={options[0]}
                        {...field}
                        isClearable // enable isClearable to demonstrate extra error handling
                        isSearchable={false}
                        className="react-dropdown"
                        classNamePrefix="dropdown"
                        options={ options } /> ) }
                        value={ value }
                        onChange={ changeHandler } ></Controller>
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
                        {errors.lasttname &&(<span style={ {
                        color:"red"} } >{errors.lastname.message}</span>) }   
                </Form.Group>
                    <input fluid
                        placeholder='Street and house number'
                        name="streetHosueNo"
                        type="text"
                        { ...register( "streetHosueNo")}/>
                       {errors.streetHosueNo &&(<span style={ {
                        color:"red"} } >{errors.streetHosueNo.message}</span>) }  
                    <input fluid
                        placeholder='Apartment, suit, etc. (optional)'
                        type="text"
                        name="apartment"
                        {...register("apartment")}/>
                    
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
                    <input fluid
                        placeholder='Phone number'
                        type='number'
                        name="phoneNo"
                        { ...register( "phoneNo" ) } />
                    { errors.phoneNo && ( <span  style={ {
                        color:"red"} }>{ errors.phoneNo.message }</span> ) }  
                <div>
                    <Link to={ `/ShoppingCart` }><Button content='Back to cart' icon='pause' labelPosition='left' style={ { marginRight: "650px" } } /></Link>
                    <Button type='submit'> Continue to payment</Button>
                </div>
            </Form>
    </> );
};


