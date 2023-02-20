import React, { Component, useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { ShippingAddressForm } from '../ShippingAddressForm/ShippingAddressForm';
import { Link } from "react-router-dom";
const BillingRadio = () =>
{
   const [value, setValue] = useState("same");

  function onChangeValue(event) {
    setValue(event.target.value);
    console.log(event.target.value);
  }

    return (
      <>
      <Form onChange={ onChangeValue }>
          <Form.Field>
              <input type="radio" value="same" name="same" checked={ value === "same" } /> Same as shipping address
          </Form.Field>
        <Form.Field><input type="radio" value="different" name="different" checked={value === "different"}/> Use a different billing address</Form.Field>
      </Form>
      {
        ( value === "different" ) ? (<div>
                    <ShippingAddressForm /></div> ) : ( <div></div> ) }
            
      
      
  </>);
};
export default BillingRadio;