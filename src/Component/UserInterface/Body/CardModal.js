
import React from "react";
import {  Divider, Placeholder, Segment } from 'semantic-ui-react'
import HeaderComponent from "../Header/HeaderComponent";
import ShoppingCartComponent from "./ShoppingCartComponent";
const CardModal = () =>
{
    return (
      <>
        <HeaderComponent />
        <h2> SHOPPING BAG</h2>
        <Segment>
          <ShoppingCartComponent />  
          <Divider ></Divider>
        </Segment>
      </>)
    
};
export default CardModal;