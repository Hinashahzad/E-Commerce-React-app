import React from "react";
import {  Segment } from 'semantic-ui-react'
import bridal from './../../../Assets/images/bridal.jpg'


function FrontBanner  () 
{
    return ( <div>
        <Segment color="black"  >
            <img src={bridal} alt="Frontbanner" className="ui fluid image" />
        </Segment>
    </div>);
    
};
export default FrontBanner;