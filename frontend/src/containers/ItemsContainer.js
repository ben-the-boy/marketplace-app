import React, { Component } from 'react';
import ItemInput from '../components/items/ItemInput';
import Items from '../components/items/Items';
import { connect } from 'react-redux';

let item0;
let item1;

class ItemsContainer extends Component {
  state = {
    items: [item0, item1]
  }

  render() {
    return (
      <div>
        <Items items={this.state.items} />
      </div>
    )
  }
}

export default ItemsContainer;
