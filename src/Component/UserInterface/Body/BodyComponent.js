import React from "react";
import CardComponent from "./CardComponent";
import { Grid, Segment } from 'semantic-ui-react'
import FrontBanner from "./FrontBanner";

/**
 * 
 * @returns Child Component : CardComponent
 */
const BodyComponent = () =>
{
    return (
        <div>
            <FrontBanner/>
            <Segment>
        <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    <CardComponent />
                </Grid.Column>
                <Grid.Column>
                    <CardComponent />
                </Grid.Column>
                <Grid.Column>
                    <CardComponent />
                </Grid.Column>
            </Grid.Row>
                </Grid>
                </Segment>
        </div>
    )
    
}

export default BodyComponent;