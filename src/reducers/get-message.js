const initialState = '';

export default function getMessage(state = initialState, action) {
  switch(action.type) {
  	case 'GET_MESSAGE':
  		return action.payload;
  		break;
  }
  return state;
}