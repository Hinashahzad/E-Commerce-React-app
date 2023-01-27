import React, { Component, useState } from 'react'
import { useSelector } from 'react-redux';
import { Menu, Segment } from 'semantic-ui-react'
import SizeTableComponent from './SizeTableComponent';

const MenuExampleTabular = () =>
{

  const [activeItem, setActiveItem] = useState("Details");
  const product = useSelector( ( state ) => state.product );
  const setActiveItemOnClick = (e, { name }) => {
    setActiveItem(name);
  };
  return ( <>
     <div>
      
      <Menu  attached='top' tabular defaultActiveIndex={1}>
        <Menu.Item
          name="Details"
          active={activeItem === "Details"}
          onClick={ setActiveItemOnClick }
          content="Details"
        />
        <Menu.Item
          name="Size"
          active={activeItem === "Size"}
          onClick={ setActiveItemOnClick }
          content="Size"
        />
      </Menu>
      {/**CONDITIONAL RENDERING */}
      {activeItem==="Details" ?  (<Segment attached='bottom'>
          <h4>{product.description}</h4>
      </Segment>) : (<Segment attached="bottom"> <SizeTableComponent /></Segment>) }
     
    </div>
  </> );
};
export default MenuExampleTabular;