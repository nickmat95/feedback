import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment/Comment.jsx';
import './Comments-list.css';

class CommentsList extends React.Component {

	render() {

		let storageComments = (!this.props.list[0]) ? JSON.parse(localStorage.getItem("comments")) : this.props.list;

		let commentsList = (storageComments === null) ? <p>No comments..</p> : storageComments.reverse().map(el => {
			return (
	    		<Comment
	    			key={el.id}
	        		name={el.name}
	        		phone={el.phone}
	        		date={el.date}
	        		message={el.message}
	    		/>
	    	);
		});

	    return (
	    	<div>
	    		{
	    			commentsList
	    		}
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		list: state.getCommentsList
	}),
	dispatch => ({

	})
)(CommentsList);