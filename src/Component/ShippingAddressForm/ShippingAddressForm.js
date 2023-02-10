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
import {userSchema} from '../../Validations/Validation'

export const ShippingAddressForm = () =>
{
    
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
    resolver: yupResolver(userSchema)
    } );
    const options = useMemo( () => countryList().getData(), [] )
    const value = useSelector( ( state ) => state.countryName );
    const dispatch = useDispatch();
    const activeUser = useSelector( ( state ) => state.activeUser );
    const navigate = useNavigate();
    const changeHandler = (value) =>
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
        { Object.keys( activeUser ).length === 0 ? ( <Segment>
            <Header as="h3">
                <Form onSubmit={ handleSubmit(onSubmit)} >
                <Container fluid><Header as="h5"> Select Country: </Header></Container>
                <Select  options={ options } value={ value } placeholder="Select Country" onChange={ changeHandler } />
                    <Controller
                        name="select"
                    control={control}
                     render={({ field }) => (
                        <Select
              // defaultValue={options[0]}
                            {...field}
                            isClearable // enable isClearable to demonstrate extra error handling
                            isSearchable={false}
                            className="react-dropdown"
                            classNamePrefix="dropdown"
                            options={options}/>)}></Controller>
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
            </Header>
        </Segment> ) :
            ( <Form >
                <Header as="h5"> Select Country: </Header>
                <Select options={ options } value={ value } placeholder="Select Country" onChange={ changeHandler } />
                <Divider />
                <Form.Group widths='equal'>
                    <Form.Input fluid value={ activeUser.firstname } placeholder='First name' />
                    <Form.Input fluid value={ activeUser.lastname } placeholder='Last name' />
                </Form.Group>
                <Form.Input fluid placeholder='Street and house number' />
                <Form.Input fluid placeholder='Apartment, suit, etc. (optional)' />
                <Form.Group widths='equal'>
                    <Form.Input fluid placeholder='Postal Code' />
                    <Form.Input fluid placeholder='City' />
                </Form.Group>
                <Form.Input fluid placeholder='Phone number' />
                <div>
                    <Link to={ `/ShoppingCart` }>
                        <Button content='Back to cart' icon='pause' labelPosition='left' style={ { marginRight: "650px" } } />
                    </Link>
                    <Link to={ `/Payment` }>
                        <Button content='Continue to payment' icon='right arrow' labelPosition='right' onClick={ () => { console.log( "Continue to payment is clicked" ); } } />
                    </Link>
                </div>
            </Form> ) }
    </> );
};


