import Item from './Item';

const Items = (props) => {

  return (
    <ul>
      {props.items.map((item) => <Item key={item.id} item={item} deleteItem={props.deleteItem}/>)}
    </ul>
  )
}

export default Items;
