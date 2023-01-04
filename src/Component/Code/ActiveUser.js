import React from "react";
import BodyComponent from "../UserInterface/Body/BodyComponent";
import FooterComponent from "../UserInterface/Footer/FooterComponent";
import { Segment } from "semantic-ui-react";
import ActiveUserHeader from "../UserInterface/Header/ActiveUserHeader";

function ActiveUser ()
{
    return (
        <Segment>
                <ActiveUserHeader />
                <BodyComponent />
                <FooterComponent />
        </Segment>
    )

}
export default ActiveUser;