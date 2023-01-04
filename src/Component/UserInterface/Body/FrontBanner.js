import React from "react";
import { Image, Segment } from 'semantic-ui-react'
import bridal from '../../images/bridal.jpg'


function FrontBanner  () 
{
    return ( <div>
        <Segment color="black"  >
            <img src={bridal} class="ui fluid image" />
        </Segment>
    </div>);
    
};
export default FrontBanner;