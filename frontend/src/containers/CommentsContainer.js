import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import Comments from '../components/comments/Comments';
import { connect } from 'react-redux';


class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <Comments comments={this.props.comments} itemId={this.props.itemId}/>
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
    addComment: comment => dispatch({type: 'ADD_COMMENT', comment})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
