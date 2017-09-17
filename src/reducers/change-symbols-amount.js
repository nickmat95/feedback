const initialState = 0;

export default function changeSymbolsAmount(state = initialState, action) {
  switch(action.type) {
  	case 'CHANGE':
  		return action.payload;
  		break;
  }
  return state;
}