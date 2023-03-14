import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import HeaderBar from '../Header/HeaderBar/JS index';
import ShoppingCart from '../../Container/ShoppingCart/JS index';
import FooterBar from '../Footer/FooterBar/JS index';
const ShoppingBag = () =>
{
    return ( <>
        <HeaderBar />
        <Header as='h1' textAlign="center">SHOPPING BAG</Header>
        <Segment>
          <ShoppingCart />
        </Segment>
          {/**FOOTER COMPONENT */}
        <Segment>
            <FooterBar />
        </Segment>
    </> );
};
export default ShoppingBag;
  