import React, { Component} from "react";
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import LoginForm from "../../Form/LoginForm";
import Home from "../Home";

/**
 * Child Component: MenuRight
 */
export default class LoggedInMenu extends Component 
  {
    state = {
        activeItem: 'Sign-out'
    }
    
    handleItemClick = ( e, { name } ) =>
    {
        this.setState( { activeItem: name } );
        console.log(this.state.activeItem);
        
    }
    render ()
    {
        const { activeItem } = this.state;
        return (
            <div>
                <Menu secondary>
                    <Link to="/Home">
                        <Menu.Item
                            name='Sign-out'
                            active={ activeItem === 'Sign-out' }
                            onClick={ this.handleItemClick }
                                />
                    </Link>
                    
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon name='shop'
                            active={ activeItem === 'shop' }
                            size="large"
                            onClick={ this.handleItemClick } />
                    </Menu.Item>
                </Menu.Menu>
                </Menu>
                {this.activeItem =="Sign-out" && <Home/> }
                </div>  
        );
    
       
    }
}