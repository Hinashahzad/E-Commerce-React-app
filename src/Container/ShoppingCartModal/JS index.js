import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal,  Divider, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import { resetShoppingCart} from '../../Store/ShoppingCartSlice/JS index';
export const ShoppingCartModal = () =>
{
    const cartItems = useSelector( ( state ) => state.shoppingCart.cart );
    const modalOpen = useSelector( ( state ) => state.shoppingCart.openCardModal );  
    const modaldimmer = useSelector( ( state ) => state.shoppingCart.modalDimmer );  
    
    const dispatch = useDispatch();
    let renderList = cartItems.map( ( item ) =>
    {
        const { image, id, title, productQuantity, price } = item;
            return ( <>
            <Modal.Content image>
            <img src={image} width={230} height={200}></img>
                <Modal.Description>
                   <div> <b>Name:</b> <p> { title } </p></div>
                    <div> <b>Quantity:</b> {productQuantity} </div>
                    <div> <b>Price: </b> ${ price } </div>
                </Modal.Description>
                </Modal.Content>
            <Divider></Divider>
        </> )
    })
    return ( <>
         <Modal dimmer={modaldimmer} open={modalOpen} onClose={() => dispatch( resetShoppingCart() )}>
                <Modal.Header>The following product has been added to Shopping Cart</Modal.Header>
                {renderList}
                <Modal.Actions>
                <Link to={`/` }><Button onClick={ () =>
                {
                    dispatch( resetShoppingCart() );
                }
        }> CONTINUE SHOPPING </Button></Link>
                <Link to ="/Checkout">
                <Button secondary onClick={ () =>
                {
                   dispatch( resetShoppingCart() );
                } }> CHECK OUT</Button></Link>
                </Modal.Actions>
        </Modal> 
    </> );
};
export default ShoppingCartModal;