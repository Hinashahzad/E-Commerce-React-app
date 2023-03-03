import { Header,  Segment } from 'semantic-ui-react'
import MenuRight from '../HeaderMenuRight/JS index';
import MenuLeft from '../HeaderMenuLeft/JS index';
import React from "react";


const HeaderBar = () =>
{
    return (
         <div>
        <Segment clearing color="olive">
           <Header as='h2' floated='right'>
                    <MenuRight  />
            </Header>
            <Header as='h2' floated='left'>
                <MenuLeft />
            </Header>
        </Segment>

  </div>
    )

}

export default HeaderBar;