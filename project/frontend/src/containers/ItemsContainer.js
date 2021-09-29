import React, { Component } from 'react';
import Items from '../components/items/Items';
import { fetchItems } from "../actions/fetchItems";
import { connect } from 'react-redux';

class ItemsContainer extends Component {

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div className="items-container">
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
    deleteItem: item => dispatch({type: "DELETE_ITEM", id: item.id}),
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
