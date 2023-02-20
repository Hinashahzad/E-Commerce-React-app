import React from "react";
import HeaderComponent from '../Header/Header';
import Body from '../Body/Body/Body';
import Footer from '../Footer/Footer';
import { Segment } from "semantic-ui-react";

const Home= ()=>
{
    
    return (
        <Segment>
                <HeaderComponent />
                <Body />
                <Footer />
        </Segment>
    )

}
export default Home;