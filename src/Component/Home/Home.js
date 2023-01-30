import React from "react";
import HeaderComponent from "../UserInterface/Header/HeaderComponent";
import BodyComponent from "../UserInterface/Body/BodyComponent/BodyComponent";
import FooterComponent from "../UserInterface/Footer/FooterComponent";
import { Segment } from "semantic-ui-react";

const Home= ()=>
{
    
    return (
        <Segment>
                <HeaderComponent />
                <BodyComponent />
                <FooterComponent />
        </Segment>
    )

}
export default Home;