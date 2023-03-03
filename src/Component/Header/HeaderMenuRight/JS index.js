import React from "react";
import { Icon, Menu, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderMenuRight = () =>
{
    const shoppingCartItems = useSelector( ( state ) => state.shoppingCart.cart );
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
                    <Link to ={`/ShoppingBag`}>
                    <Menu.Item as='a'>
                             <Icon
                                name='shop'
                                size="large"/>
                            <Label color='red' floating>
                            {Object.keys(shoppingCartItems).length}
                            </Label>
                        </Menu.Item>
                        </Link>
                </Menu.Menu>
            </Menu>
        </div>
    );
};
export default HeaderMenuRight;