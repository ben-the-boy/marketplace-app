import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import Comments from '../components/comments/Comments';
import { connect } from 'react-redux';


class CommentsContainer extends Component {

  render() {
    return (
      <div className="comments-container">
        <h5>Replies:</h5>
        <Comments comments={this.props.comments} itemId={this.props.itemId} deleteComment={this.props.deleteComment}/>
        <CommentInput addComment={this.props.addComment} itemId={this.props.itemId}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: comment => dispatch({type: 'ADD_COMMENT', comment}),
    deleteComment: comment => dispatch({type: 'DELETE_COMMENT', id: comment.id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
