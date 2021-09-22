import React, { Component } from 'react';
import ItemInput from '../components/items/ItemInput';
import Items from '../components/items/Items';
import { connect } from 'react-redux';

class ItemsContainer extends Component {
  state = {
    items: []
  }

  render() {
    return (
      <div>
        <ItemInput />
        <Items items={this.state.items} />
      </div>
    )
  }
}

export default ItemsContainer;
