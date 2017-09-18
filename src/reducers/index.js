import { combineReducers } from 'redux';

import getName from './get-name.js';
import getPhone from './get-phone.js';
import getMessage from './get-message.js';
import getCommentsList from './get-comments-list.js';

export default combineReducers({
	getName,
	getPhone,
	getMessage,
	getCommentsList
});