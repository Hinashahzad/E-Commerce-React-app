import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { Segment, Card, Icon, Image, Button, Placeholder } from 'semantic-ui-react'
const src = '../../images/bridal.jpg'

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
        const { image, title, price, catagory } = product;
        return (
            <Segment color="purple" padded="very">
                <Card link>
                    <Image src={image} wrapped ui={false}></Image>
                    <Card.Content>
                        <Card.Header>{ title }</Card.Header>
                        <Card.Description> { price }</Card.Description>
                        </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name="plus cart"/>
                         Add to cart
                        </a>
                    </Card.Content>
                </Card>
                
        </Segment>)
        
    })
    return (
        <>
            { renderList }</>
    ) 
}

export default CardComponent;