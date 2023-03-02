import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import HeaderComponent from '../../Component/Header/Header';
import ShoppingCartComponent from '../ShoppingCart/ShoppingCartComponent';
import Footer from '../../Component/Footer/Footer';
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
