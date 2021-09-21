import Item from './Item';

const Items = ({items}) => {
  return (
    <ul>
      {items.map((item, index) => <Item name={index}/>)}
    </ul>
  )
}

export default Items;
