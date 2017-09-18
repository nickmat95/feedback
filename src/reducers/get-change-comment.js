const initialState = [];

export default function getChangeComment(state = initialState, action) {
  switch(action.type) {
  	case 'GET_CHANGE_COMMENT':
  		return action.payload;
  		break;
  }
  return state;
}