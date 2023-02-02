import { Header,  Segment } from 'semantic-ui-react'
import MenuRight from './MenuRight';
import MenuLeft from './MenuLeft';
import React from "react";

/**
 * 
 * @returns Parent Component: HeaderComponent
 * Child component:MenuRight
 * Child Component: MenueLeft 
 */
const HeaderComponent = (props) =>
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

export default HeaderComponent;