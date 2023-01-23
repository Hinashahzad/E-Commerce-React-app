
import React from "react";
import { Button, Image, Grid, Segment } from 'semantic-ui-react'
import BagComponent from "./BagComponent";
const CardModal = () =>
{
    return (
      <>
        <h2> Card Modal</h2>
        <Segment>
         <Grid centered >
            <BagComponent />  
          </Grid> 
        </Segment>
      </>)
    
};
export default CardModal;