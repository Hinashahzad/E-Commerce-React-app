import React,{useState} from 'react'
import { Button, Header, Image, Label, Icon, Modal } from 'semantic-ui-react'
import CardComponent from '../UserInterface/Body/CardComponent';
import ItemsUpload from './ItemsUpload';

/**
 * 
 * @returns Parent Component: ModelforAddItems
 * Child Component: ItemsUpload
 */
  function ModalforAddItems() {
  const [open, setOpen] = useState(false)
  const [ items, setItems ] = useState( [  ] )
  console.log( items );
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add items</Button>}
    >
      <Modal.Header>Select Item image</Modal.Header>
          <Modal.Content >
              {/** Calling Child Component: ItemsUpload */}
        <ItemsUpload items={ items } setItems={ setItems } />
        <CardComponent items={ items} />
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
              </Button>
        <Button
        content="Upload Item"
        labelPosition='right'
        onClick={() => setOpen(false)}
        positive>
        <Label>
            <Icon name='upload' /> Upload items
        </Label>
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
export default ModalforAddItems;
