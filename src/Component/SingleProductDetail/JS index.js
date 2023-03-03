import React from 'react';
import { Segment } from 'semantic-ui-react'
import ProductDetail from '../../Container/ProductDetail/JS index';
import HeaderBar from '../Header/HeaderBar/JS index';
import FooterBar from '../Footer/FooterBar/JS index';


const SingleProductDetail = () =>
{
    
    return ( <>
        {/**Header Component */}
        <Segment textAlign="center" color="olive">
            <HeaderBar />
        </Segment>
        
        {/** Product Detail Component */}
        <ProductDetail />
      
        {/**Footer Component */}
        <Segment>
            <FooterBar/>
        </Segment>
    </> );
};

export default SingleProductDetail;