import React, { Component} from "react";
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeActiveUser } from "../../../redux/action/UserAction";

/**
 * Child Component: MenuRight
 */
const LoggedInMenu =()=>
  {

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
                    <Menu.Item>
                        <Icon name='shop'
                            size="large"
                             />
                    </Menu.Item>
                </Menu.Menu>
                </Menu>        
        );
}
export default LoggedInMenu;