import React from 'react'
import { Segment, Input, Icon } from 'semantic-ui-react'
import FooterMiddle from '../FooterMiddle/JS index';

const FooterLeft = () => (
    <div>
        <Segment.Group horizontal>
            <Segment clearing >
                <Icon name="facebook" size='huge'></Icon>
                <Icon name="instagram" size='huge' ></Icon>
                <Icon name="twitter" size='huge'></Icon>
                <Icon name= "youtube" size='huge'></Icon>
            </Segment>
            <Segment clearing >
                <FooterMiddle />
            </Segment>
            <Segment clearing >
                <Input action='Subscribe' placeholder='Email...' />
            </Segment>
        </Segment.Group>
  </div>
);

export default FooterLeft;