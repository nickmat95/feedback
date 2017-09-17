const initialState = '';

export default function getPhone(state = initialState, action) {
  switch(action.type) {
  	case 'GET_PHONE':
  		return action.payload;
  		break;
  }
  return state;
}