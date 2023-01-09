import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { Segment, Card, Icon } from 'semantic-ui-react'
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
            <Icon name='user' />
            16 Friends
        </a>
    )
    
    const renderList = products.map( ( product ) =>
    {
        //Destructuring the products array
        const { image, title, description } = product;
        return(<Segment color="purple">
                <Card
                    image={image}
                    header={title}
                    meta='Product'
                    description={description}
                    extra={extra}
  />
        </Segment>)
        
    })
    return (
        <>
            { renderList }</>
    ) 
}

export default CardComponent;