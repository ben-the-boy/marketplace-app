import Item from './Item';

const Items = (props) => {

  return (
    <div className="items-list">
      {props.items.map((item) => <Item key={item.id} item={item} deleteItem={props.deleteItem}/>)}
    </div>
  )
}

export default Items;
