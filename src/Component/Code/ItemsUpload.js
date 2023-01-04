import React, {useState} from 'react';
import { Input, Card } from 'semantic-ui-react'
// Functional Component to upload the files (Add item module in AdminPortal) 
const ItemsUpload = ( {items, setItems} ) =>
{
    
    const uplaodItemHandler = (event) =>
    {
        //Selecting File (image file)
        const selectedFile = event.target.files[ 0 ];
        setItems( [ ...items, selectedFile ] )
        console.log( items );
        
    }
    return (
            <Card centered size="medium" >
            <Input type="file" name="img" size="medium" onChange={ ( e ) => { uplaodItemHandler(e); } }/>
            </Card>
    );
};
export default ItemsUpload;