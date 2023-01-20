import React from "react";
import { useSelector } from "react-redux";
import { Segment, Card, Button, Placeholder } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

/**
 * 
 * @returns Parent Component: BodyComponent
 */
const CardComponent = ()=>
{
    const products = useSelector( ( state ) => state.allProducts.products );

    const renderList = products.map( ( product ) =>
    {
        //Destructuring the products array
        const { id, image, title, price, catagory } = product;
        return (
            <Segment color="purple" padded="very">
                <Link to={`/product/${id}`}>
                <Card key={ id } >
                    <img src={image} width={250} height={345}></img>
                    <Card.Content>
                        <Card.Header>{ catagory }</Card.Header>
                        <Card.Description> ${ price } </Card.Description>
                        </Card.Content>
                    </Card>
                    </Link>
                
        </Segment>)
        
    })
    return (
        <>
            { renderList }</>
    ) 
}

export default CardComponent;