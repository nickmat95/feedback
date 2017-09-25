const initialState = 'edit';

export default function getEditButtonState(state = initialState, action) {
  switch(action.type) {
  	case 'GET_BUTTON_STATE':
  		return {
  			state: action.newState,
  			id: action.currentId
  		};
  		break;
  }
  return state;
}