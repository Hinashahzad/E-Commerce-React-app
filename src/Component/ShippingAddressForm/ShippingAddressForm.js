import React,{useMemo} from 'react';
import { Divider, Form, Header, Button, Loader, Segment, Container} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { countryValue } from '../../Stores/action/CountryValue';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
export const ShippingAddressForm = () =>
{
     const { register, handleSubmit, formState: { errors }, reset } = useForm();
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
                <Select options={ options } value={ value } placeholder="Select Country" onChange={ changeHandler } />
                <Divider />
                <Form.Group widths='equal'>
                        <input fluid
                            placeholder='First name'
                            type='text'
                            name="firstname"
                            { ...register( "firstname", { required: "First Name is required" } ) } />
                                <p color="red">{errors?.firstname && (
                                <span color="red">{errors?.firstname?.message}</span>)}</p>
                        <input fluid
                            placeholder='Last name'
                            type='text'
                            name="lastname"
                            { ...register( "lastname", { required: "Last Name is required" } ) } />
                                <p color="red">{errors?.lastname && (
                                <span color="red">{errors?.lastname?.message}</span>)}</p>
                </Form.Group>
                    <input fluid
                        placeholder='Street and house number'
                        name="streetHosueNo"
                        type="text"
                        { ...register( "streetHosueNo", { required:"Street and House number is required"})}
                    />
                     <p color="red">{errors?.streetHosueNo && (
                                <span color="red">{errors?.streetHosueNo?.message}</span>)}</p>
                    <input fluid
                        placeholder='Apartment, suit, etc. (optional)'
                        type="text"
                        name="apartment"
                        {...register("apartment")}
                    />
                <Form.Group widths='equal'>
                        <input fluid
                            placeholder='Postal Code'
                            name="postalCode"
                            type="text"
                            { ...register( "postalCode", { required: "PostalCode is required" } ) } />
                        <p color="red">{errors?.postalCode && (
                                <span color="red">{errors?.postalCode?.message}</span>)}</p>
                        <input fluid
                            placeholder='City'
                            name="city"
                            type="text"
                            { ...register( "city", { required: "City is required" } ) } />
                        <p color="red">{errors?.city && (
                                <span color="red">{errors?.city?.message}</span>)}</p>
                </Form.Group>
                    <input fluid
                        placeholder='Phone number'
                        type='number'
                        name="phoneNo"
                        { ...register( "phoneNo", { required: "Phone number is required" } ) } />
                    <p color="red">{errors?.phoneNo && (
                                <span color="red">{errors?.phoneNo?.message}</span>)}</p>
                <div>
                        { /*<Link to={ `/ShoppingCart` }><Button content='Back to cart' icon='pause' labelPosition='left' style={ { marginRight: "650px" } } /></Link>*/ }
                    
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


