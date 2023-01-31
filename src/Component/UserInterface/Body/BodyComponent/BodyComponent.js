import React from "react";
import CardComponent from "../ProductCardComponent/ProductCardComponent";
import { Card, Container, Grid, Segment } from 'semantic-ui-react'
import FrontBanner from "../FrontBanner/FrontBanner";
import ProductApi from "../../../../Services/ProductApi/ProductApi";

/**
 * 
 * @returns Child Component : CardComponent
 */
const BodyComponent = () =>
{
    return (
        <div>
            <ProductApi />
            <FrontBanner />
            <Segment color="blue">
                <h2 >Choose Product by Catagory</h2>
            </Segment>
            <Segment color="green" >
                <Grid centered >
                    <CardComponent />
                </Grid>
            </Segment>
        </div>
    )
}
export default BodyComponent;