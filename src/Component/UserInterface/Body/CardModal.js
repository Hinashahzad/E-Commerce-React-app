
import React from "react";
import {  Divider, Placeholder, Segment } from 'semantic-ui-react'
import HeaderComponent from "../Header/HeaderComponent";
import ShoppingCartComponent from "./ShoppingCartComponent";
const CardModal = () =>
{
    return (
      <>
        <HeaderComponent />
        <h2 text-align="center"> SHOPPING BAG</h2>
        <Segment>
          <ShoppingCartComponent />  
        </Segment>
      </>)
    
};
export default CardModal;