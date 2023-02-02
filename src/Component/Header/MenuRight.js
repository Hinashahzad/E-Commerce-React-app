import React from "react";
import { Icon, Menu, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Child Component: MenuRight
 */
const MenuRight = () =>
{
    const bagProducts = useSelector( ( state ) => state.card.products );

    const renderList = bagProducts.map( ( product ) =>
    {
        const { quantity } = product
        return ( <>
            <Label color='red' floating>
                            {quantity}
                            </Label>
            </> )
    })
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
                    <Link to ={`/ShoppingCart`}>
                    <Menu.Item as='a'>
                             <Icon
                                name='shop'
                                size="large"/>
                           {renderList}
                        </Menu.Item>
                        </Link>
                </Menu.Menu>
            </Menu>
            
        </div>
    );
};
export default MenuRight;