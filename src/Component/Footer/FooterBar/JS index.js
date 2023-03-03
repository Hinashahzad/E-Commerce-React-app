import { Segment } from 'semantic-ui-react';
import FooterLeft from '../FooterLeft/JS index';
import React from 'react';
const FooterBar = () =>
{
    return (
        <div>
            <Segment clearing>
                <FooterLeft />
          </Segment>
        </div>
    )
    
}

export default FooterBar;