import React, { Component } from 'react';
import Items from '../components/items/Items';
import { connect } from 'react-redux';

class ItemsContainer extends Component {

  render() {
    return (
      <div>
        <Items items={this.props.items} deleteItem={this.props.deleteItem}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: item => dispatch({type: "DELETE_ITEM", id: item.id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
