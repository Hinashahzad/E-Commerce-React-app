import React,{useMemo} from 'react';
import { Divider, Form, Header, Button, Loader, Segment} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { countryValue } from '../../Stores/action/CountryValue';
export const ShippingAddressForm = () =>
{
    const options = useMemo( () => countryList().getData(), [] )
    const value = useSelector( ( state ) => state.countryName );
    const dispatch = useDispatch();
    const activeUser = useSelector( ( state ) => state.activeUser );
    console.log( activeUser.firstName );
    console.log(activeUser.lastName);
    const changeHandler = (value) =>
    {
        //setValue(value)
        dispatch( countryValue( value ) );
    }
    return ( <>
        {/**It means successfully Logged in */}
        { Object.keys( activeUser ).length === 0 ? ( <Segment>
            <Header as="h3">
                <div>CONTINUE AS GUEST </div>
                <Form >
                <Header as="h5"> Select Country: </Header>
                <Select options={ options } value={ value } placeholder="Select Country" onChange={ changeHandler } />
                <Divider />
                <Form.Group widths='equal'>
                    <Form.Input fluid  placeholder='First name' />
                    <Form.Input fluid  placeholder='Last name' />
                </Form.Group>
                <Form.Input fluid placeholder='Street and house number' />
                <Form.Input fluid placeholder='Apartment, suit, etc. (optional)' />
                <Form.Group widths='equal'>
                    <Form.Input fluid placeholder='Postal Code' />
                    <Form.Input fluid placeholder='City' />
                </Form.Group>
                <Form.Input fluid placeholder='Phone number' />
                <div>
                    <Button content='Back to cart' icon='pause' labelPosition='left' style={ { marginRight: "650px" } } />
                    <Button content='Continue to shipping' icon='right arrow' labelPosition='right' />
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
                    <Button content='Back to cart' icon='pause' labelPosition='left' style={ { marginRight: "650px" } } />
                    <Button content='Continue to shipping' icon='right arrow' labelPosition='right' />
                </div>
            </Form> ) }
    </> );
};


