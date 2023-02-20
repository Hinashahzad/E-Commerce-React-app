import React from 'react';
import { useSelector } from 'react-redux';
import { Segment, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
export const Product = () =>
{
    const products = useSelector( ( state ) => state.product.products );
    console.log(products);
    
    const renderList = products.map( ( product ) =>
    {
        //Destructuring the products array
        const { id, image, title, price} = product;
        return (
            <Segment color="purple" padded="very">
                <Link to={`/product/${id}`}>
                <Card key={ id } >
                    <img src={image} width={250} height={345}></img>
                    <Card.Content>
                        <Card.Header as="h3">{ title }</Card.Header>
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
};
export default Product;
