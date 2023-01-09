import React from "react";
import CardComponent from "./CardComponent";
import { Card, Container, Grid, Segment } from 'semantic-ui-react'
import FrontBanner from "./FrontBanner";
import ProductApi from "../../Code/ProductApi";

/**
 * 
 * @returns Child Component : CardComponent
 */
const BodyComponent = () =>
{
    return (
        <div>
            <ProductApi />
            <FrontBanner/>
            <Segment color="green">
                <Grid>
                    <CardComponent />
                </Grid>
            </Segment>
        </div>
    )
    
}

export default BodyComponent;