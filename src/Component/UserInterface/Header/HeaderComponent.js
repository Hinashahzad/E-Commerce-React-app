import { Header, Icon, Segment } from 'semantic-ui-react'
import MenuRight from './MenuRight';
import MenuLeft from './MenuLeft';
import React, { useState} from "react";

/**
 * 
 * @returns Parent Component: HeaderComponent
 * Child component:MenuRight
 * Child Component: MenueLeft 
 */
const HeaderComponent = (props) =>
{
    //Function to receive (Sign-in and Register from MenuRight (Child Component))
    const receiveData = (status) =>
    {
        //Sending status(Sign-in or Register to Home (Parent):
        props.receiveData( status );
    }
    
    return (
         <div>
        <Segment clearing color="olive">
           <Header as='h2' floated='right'>
                    <MenuRight receiveData={ receiveData} />
            </Header>
            <Header as='h2' floated='left'>
                <MenuLeft />
            </Header>
        </Segment>

  </div>
    )
    
}

export default HeaderComponent;