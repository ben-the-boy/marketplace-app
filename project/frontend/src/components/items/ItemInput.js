import React, { Component } from 'react';
import { postItem } from '../../actions/postItem';


class ItemInput extends Component {

  state = {
    name: '',
    description: '',
    imageUrl: ''
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

  handleImageChange = (event) => {
    this.setState({
      ...this.state,
      imageUrl: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    postItem(this.state);
    this.setState({
      name: '',
      description: '',
      imageUrl: ''
    })
    this.props.history.push("/items");
  }

  render() {
    return (
      <form id="new-item-form" onSubmit={this.handleSubmit}>
        Item Name:
        <br/>
        <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
        <br/>
        Item Description:
        <br/>
        <textarea onChange={this.handleDescriptionChange} value={this.state.description}/>
        <br/>
        Image URL:
        <br/>
        <textarea onChange={this.handleImageChange} value={this.state.imageUrl}/>
        <br/>
        <input type="submit" value="Add Item"/>
      </form>
    )
  }
}


export default ItemInput;
