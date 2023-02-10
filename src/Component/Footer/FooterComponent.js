import { Segment } from 'semantic-ui-react';
import SocialMediaIcon from './SocialMediaIcon'
import React from 'react';
const FooterComponent = () =>
{
    return (
        <div>
            <Segment clearing>
                <SocialMediaIcon />
          </Segment>
        </div>
    )
    
}

export default FooterComponent;