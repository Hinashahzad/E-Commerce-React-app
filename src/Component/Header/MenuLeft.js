import React, {Component} from "react";
import { Menu } from 'semantic-ui-react';
/**
 * Child Component: MenuLeft
 */
export default class MenuLeft extends Component
{
    state = { activeItem: 'Sign-in' }
    handleItemClick = ( e, { name } ) => this.setState( { activeItem: name } )
    render ()
    {
         const { activeItem } = this.state;
        return (
            <Menu secondary>
                <Menu.Item
                    name='Home'
                    active={ activeItem === 'Home' }
                    onClick={ this.handleItemClick }
                />
                <Menu.Item
                    name='Our Company'
                    active={ activeItem === 'Company' }
                    onClick={ this.handleItemClick }
                />
                <Menu.Item
                    name='About us'
                    active={ activeItem === 'About' }
                    onClick={ this.handleItemClick }
                />
                    <Menu.Item
                        name='Locations'
                        active={ activeItem === 'Locations' }
                        onClick={ this.handleItemClick }
                    />
            </Menu>
        );
    }
}
