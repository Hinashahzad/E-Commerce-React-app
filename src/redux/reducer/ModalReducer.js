
/**
 * Modal Reducer: How Modal actions are performed: 
 */
const initialState = {
    open: false, 
    dimmer:undefined
};

export const ModalReducer = (state=initialState, action) =>
{
    switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
        case 'CLOSE_MODAL':
            return initialState;
        default:
            return initialState;
  }
    
}