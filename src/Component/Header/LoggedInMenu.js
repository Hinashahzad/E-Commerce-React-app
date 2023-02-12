import React from "react";
import { Icon, Menu, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeActiveUser } from "../../Stores/action/UserAction";

/**
 * Child Component: MenuRight
 */
const LoggedInMenu =()=>
  {
    const shoppingCart = useSelector( ( state ) => state.card.products );
    const activeUser = useSelector( ( state ) => state.activeUser );
    const dispatch = useDispatch();
    const handleItemClick = () =>
    {
        if ( activeUser ) { dispatch( removeActiveUser() ); }
        else
        {
            return ( alert( "USER is LOGGED OUT" ) );
        }
        
    }
        return (
                <Menu secondary>
                    <Link to="/Home">
                        <Menu.Item
                            name='Sign-out'
                            onClick={ handleItemClick }/>
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
        );
}
export default LoggedInMenu;