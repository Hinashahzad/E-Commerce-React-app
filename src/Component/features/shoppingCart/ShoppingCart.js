import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Divider, Header, Segment } from 'semantic-ui-react';
import HeaderComponent from '../../Header/Header';
import ShoppingCartComponent from './ShoppingCartComponent';
import Footer from '../../Footer/Footer';
const ShoppingCart = () =>
{
    
    return ( <>
        <HeaderComponent />
        <Header as='h1' textAlign="center">SHOPPING BAG</Header>
        <Segment>
          <ShoppingCartComponent />
        </Segment>
          {/**FOOTER COMPONENT */}
        <Segment>
            <Footer />
        </Segment>
    </> );
};
export default ShoppingCart;
