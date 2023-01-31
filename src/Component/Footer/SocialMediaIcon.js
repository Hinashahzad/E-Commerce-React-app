import React from 'react'
import { Segment, Input, Icon } from 'semantic-ui-react'
import FooterMiddleComponent from './FooterMiddleComponent';

const SocialMediaIcon = () => (
    <div>
        <Segment.Group horizontal>
            <Segment clearing >
                <Icon name="facebook" size='huge'></Icon>
                <Icon name="instagram" size='huge' ></Icon>
                <Icon name="twitter" size='huge'></Icon>
                <Icon name= "youtube" size='huge'></Icon>
            </Segment>
            <Segment clearing >
                <FooterMiddleComponent />
            </Segment>
            <Segment clearing >
                <Input action='Subscribe' placeholder='Email...' />
            </Segment>
        </Segment.Group>
  </div>
);

export default SocialMediaIcon;