import React, { Component } from 'react';
import { postComment } from '../../actions/postComment';

class CommentInput extends Component {
  state = {
    content: '',
    itemId: this.props.itemId
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      content: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    postComment(this.state, this.props.addComment);
    this.setState({
      ...this.state,
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.content} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CommentInput;
