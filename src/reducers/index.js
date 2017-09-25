import { combineReducers } from 'redux';

import getName from './get-name.js';
import getPhone from './get-phone.js';
import getMessage from './get-message.js';
import getCommentsList from './get-comments-list.js';
import getChangeComment from './get-change-comment.js';
import getEditButtonState from './get-edit-button-state.js';

export default combineReducers({
	getName,
	getPhone,
	getMessage,
	getCommentsList,
	getChangeComment,
	getEditButtonState
});