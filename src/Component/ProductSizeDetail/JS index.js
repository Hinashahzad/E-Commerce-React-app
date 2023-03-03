import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import SizeTableComponent from '../SizeTable/SizeTable';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../Store/productSlice';

const ProductSizeDetail = () =>
{
  const activeItem = useSelector( ( state ) => state.product.activeTab );
  const product = useSelector( ( state ) => state.product.singleProduct );
  const dispatch = useDispatch();
  
  const setActiveItemOnClick = ( e, { name } ) =>
  {
    dispatch( setActiveTab( name ) );
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
        <h4>Product description:</h4>{ product.description }
        <h4>Product catagory:</h4> {product.category}
      </Segment>) : (<Segment attached="bottom"> <SizeTableComponent /></Segment>) }
     
    </div>
  </> );
};
export default ProductSizeDetail;