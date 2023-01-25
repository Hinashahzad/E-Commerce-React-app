import { useDispatch, useSelector } from 'react-redux'
import { CloseModalAction } from '../../../redux/action/ModalAction';
import { Segment, Card, Button, Modal } from 'semantic-ui-react'

const ModalComponent = () =>
{
    const modalState = useSelector( ( state ) => state.modal );
    const { open, dimmer } = modalState;
    console.log( modalState );
    const dispatch = useDispatch();
    return ( <>
        <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch(CloseModalAction())}>
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch(CloseModalAction())}>
            Disagree
          </Button>
          <Button positive onClick={() => dispatch(CloseModalAction())}>
            Agree
          </Button>
        </Modal.Actions>
      </Modal>
        
    </> );
};

export default ModalComponent;

