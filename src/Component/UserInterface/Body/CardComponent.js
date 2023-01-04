import React from "react";
import { Segment, Card, Placeholder, Image } from 'semantic-ui-react'
const src = '../../images/bridal.jpg'
/**
 * 
 * @returns Parent Component: BodyComponent
 */
const CardComponent = ()=>
{
    return (
        <Segment>
            <Card.Group itemsPerRow={1}>
            <Card color='red' image={src} />
            </Card.Group>
        </Segment>
    )
    
}

export default CardComponent;