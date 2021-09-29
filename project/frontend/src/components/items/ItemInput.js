import React, { Component } from 'react';
import { postItem } from '../../actions/postItem';


class ItemInput extends Component {

  state = {
    name: '',
    description: ''
  };

  handleNameChange = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      ...this.state,
      description: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    postItem(this.state);
    this.setState({
      name: '',
      description: ''
    })
    this.props.history.push("/items");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Item Name:
        <br/>
        <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
        <br/>
        Item Description:
        <br/>
        <textarea onChange={this.handleDescriptionChange} value={this.state.description}/>
        <br/>
        <input type="submit" value="Add Item"/>
      </form>
    )
  }
}


export default ItemInput;
