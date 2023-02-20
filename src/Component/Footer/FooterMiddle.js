import React, {Component} from "react";
import { Menu } from 'semantic-ui-react';
export default class FooterMiddle extends Component 
{
  state = { activeItem: 'companypolicy' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render ()
  {
    const { activeItem } = this.state;
    return (
      <Menu secondary>
        <Menu.Item
          name='Company Policy'
          active={ activeItem === 'companypolicy' }
          onClick={ this.handleItemClick }
        />
        <Menu.Item
          name='History'
          active={ activeItem === 'History' }
          onClick={ this.handleItemClick }
        />
        <Menu.Item
          name='Quality'
          active={ activeItem === 'quality' }
          onClick={ this.handleItemClick }
        />
      </Menu>
    );
  }
}
