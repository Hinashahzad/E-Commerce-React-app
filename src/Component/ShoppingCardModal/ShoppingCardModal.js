
import React from "react";
import { Segment, Header} from 'semantic-ui-react'
import HeaderComponent from "../Header/HeaderComponent";
import ShoppingCartComponent from "../ShoppingCartComponent/ShoppingCartComponent";
;
const ShoppingCardModal = () =>
{
    return (
      <>
        <HeaderComponent />
        <Header as='h1' textAlign="center">SHOPPING BAG</Header>
        <Segment>
          <ShoppingCartComponent />
        </Segment>
      </>)
    
};
export default ShoppingCardModal;