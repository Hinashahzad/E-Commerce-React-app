import React from "react";
import { Icon, Menu, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MenuRight = () =>
{
    const shoppingCart = useSelector( ( state ) => state.card.products );
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
                        content='Register'/>
                </Link>
                <Menu.Menu position='right'>
                    <Link to ={`/ShoppingCart`}>
                    <Menu.Item as='a'>
                             <Icon
                                name='shop'
                                size="large"/>
                            <Label color='red' floating>
                            {Object.keys(shoppingCart).length}
                            </Label>
                        </Menu.Item>
                        </Link>
                </Menu.Menu>
            </Menu>
        </div>
    );
};
export default MenuRight;