import React, { Component, useState} from "react";
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

/**
 * Child Component: MenuRight
 */
const MenuRight = (props) =>
{
    const handleButtonClick = ( e, { name } ) =>
    {
        //Sending name(Sign-in or Register to Header Component (Parent):
        props.receiveData(name);
    };
    return (
        <div>
            <Menu secondary>
                <Link to="/loginForm">
                    <Menu.Item
                        name='Sign-in'
                        content='Sign-in'
                        onClick={ handleButtonClick }
                    />
                </Link>
                <Link to="/registrationForm">
                    <Menu.Item
                        name='Register'
                        content='Register'
                        onClick={ handleButtonClick }
                    />
                </Link>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon
                            name='shop'
                            size="large"
                            onClick={ handleButtonClick } />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            
        </div>
    );
};
export default MenuRight;