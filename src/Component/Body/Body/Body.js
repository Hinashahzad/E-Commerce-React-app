import React from "react";
import {  Grid, Segment } from 'semantic-ui-react'
import ProductsApi from "../../../Services/Api/ProductsApi";
import Product from '../../features/product/Product';
const Body = () =>
{
    return (
        <div>
            <ProductsApi />
            <Segment color="green" >
                <Grid centered><Product /></Grid>
            </Segment>
        </div>
    )
}
export default Body;