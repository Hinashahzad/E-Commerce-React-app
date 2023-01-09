import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { Segment, Card, Icon, Image, Button, Placeholder } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

/**
 * 
 * @returns Parent Component: BodyComponent
 */
const CardComponent = ()=>
{
    const products = useSelector( ( state ) => state.allProducts.products );
    const extra = (
        <a>
            <Button> Add to Cart</Button>
        </a>
    )
    
    const renderList = products.map( ( product ) =>
    {
        //Destructuring the products array
        const { id, image, title, price, catagory } = product;
        return (
            <Segment color="purple" padded="very">
                <Link to={`/product/${id}`}>
                <Card link key={ id } >
                    <Image src={image} wrapped ui={false}></Image>
                    <Card.Content>
                        <Card.Header>{ title }</Card.Header>
                        <Card.Description> ${ price } </Card.Description>
                        </Card.Content>
                    <Card.Content extra>
                        <a>
                                <Button onClick={ () => { console.log( "Button clicked" ); } }> Add to Cart</Button>
                        </a>
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