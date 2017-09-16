import { combineReducers } from 'redux';

let testReducer = (state = [], action) => {
	switch(action.type) {
  	case 'FOO':
  		return [
	  		'foo',
	  		];
  		break;
  }
  return state;
}

export default combineReducers({
	testReducer
});