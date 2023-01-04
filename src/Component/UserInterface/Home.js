import React from "react";
import HeaderComponent from "./Header/HeaderComponent";
import BodyComponent from "./Body/BodyComponent";
import FooterComponent from "./Footer/FooterComponent";
import { Segment } from "semantic-ui-react";

const Home= (props)=>
{
    //Function to receive (Sign-in and Register from Header Component (Child Component))
    const receiveData = (status) =>
    {
        //Sending status(Sign-in or Register to App Component (Parent):
        props.receiveData( status );
    }
    return (
        <Segment>
                <HeaderComponent receiveData={ receiveData} />
                <BodyComponent />
                <FooterComponent />
        </Segment>
    )

}
export default Home;