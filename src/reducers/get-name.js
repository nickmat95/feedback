const initialState = '';

export default function getName(state = initialState, action) {
  switch(action.type) {
  	case 'GET_NAME':
  		return action.payload;
  		break;
  }
  return state;
}