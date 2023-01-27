import React, { Component, useState } from 'react'
import { useSelector } from 'react-redux';
import { Menu, Segment } from 'semantic-ui-react'

const MenuExampleTabular = () =>
{

   const [activeItem, setActiveItem] = useState("Details");
  const product = useSelector( ( state ) => state.product );
  console.log( product );
  const setActiveItemOnClick = (e, { name }) => {
    console.log(name);
    setActiveItem(name);
  };
  return ( <>
     <div>
      
      <Menu  attached='top' tabular>
        <Menu.Item
          name="Details"
          active={activeItem === "Details"}
          onClick={setActiveItemOnClick}
        />
        <Menu.Item
          name="Size"
          active={activeItem === "Size"}
          onClick={setActiveItemOnClick}
        />
      </Menu>
      <Segment attached='bottom'>
          <p> {product.description} </p>
        </Segment>
    </div>
  </> );
};
export default MenuExampleTabular;