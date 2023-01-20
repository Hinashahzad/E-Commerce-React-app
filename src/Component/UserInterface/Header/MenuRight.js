import React, { Component, useState} from "react";
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

/**
 * Child Component: MenuRight
 */
const MenuRight = (props) =>
{
    return (
        <div>
            <Menu secondary>
                <Link to={`/Login`}>
                    <Menu.Item
                        name='Sign-in'
                        content='Sign-in'
                    />
                </Link>
                <Link to={`/Registration`}>
                    <Menu.Item
                        name='Register'
                        content='Register'
                        
                    />
                </Link>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon
                            name='shop'
                            size="large"
                            />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            
        </div>
    );
};
export default MenuRight;