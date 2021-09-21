import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import Comments from '../components/comments/Comments';
import { connect } from 'react-redux';

let comment0;
let comment1;

class CommentsContainer extends Component {
  state = {
    items: [comment0, comment1]
  }

  render() {
    return (
      <div>
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentsContainer;
