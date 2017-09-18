const initialState = [];

export default function getCommentsList(state = initialState, action) {
  switch(action.type) {
  	case 'GET_COMMENTS':
  		return action.payload;
  		break;
  }
  return state;
}