
import React from "react";
import {  Divider, Placeholder, Segment } from 'semantic-ui-react'
import BagComponent from "./BagComponent";
const CardModal = () =>
{
    return (
      <>
        <h2> Card Modal</h2>
        <Segment>
          <BagComponent />  
          <Divider ></Divider>
        </Segment>
      </>)
    
};
export default CardModal;