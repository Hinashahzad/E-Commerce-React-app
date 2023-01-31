import React from "react";
import HeaderComponent from "../Header/HeaderComponent";
import BodyComponent from "../Body/BodyComponent/BodyComponent";
import FooterComponent from "../Footer/FooterComponent";
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