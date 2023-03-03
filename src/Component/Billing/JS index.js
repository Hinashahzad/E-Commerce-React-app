import React, {  useState } from 'react'
import { Form } from 'semantic-ui-react'
import ShippingAddressForm from '../../Container/ShippingAddressForm/JS index';
const Billing = () =>
{
   const [value, setValue] = useState("same");

  function onChangeValue(event) {
    setValue(event.target.value);
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
export default Billing;