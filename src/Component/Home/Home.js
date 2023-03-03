import React from "react";
import HeaderBar from "../Header/HeaderBar/JS index";
import { Segment } from "semantic-ui-react";
import Products from "../../Container/Products/JS index";
import FooterBar from "../Footer/FooterBar/JS index";

const Home= ()=>
{
    return (
        <Segment>
                <HeaderBar />
                <Products />
                <FooterBar />
        </Segment>
    )

}
export default Home;