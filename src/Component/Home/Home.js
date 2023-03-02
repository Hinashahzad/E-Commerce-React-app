import React from "react";
import HeaderComponent from '../Header/Header';
import Footer from '../Footer/Footer';
import { Segment } from "semantic-ui-react";
import Products from "../../Container/Product/Products";

const Home= ()=>
{
    return (
        <Segment>
                <HeaderComponent />
                <Products />
                <Footer />
        </Segment>
    )

}
export default Home;