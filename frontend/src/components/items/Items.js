import Item from './Item';

const Items = ({items}) => {
  return (
    <ul>
      {items.map((item) => <Item key={item.name} name={item.name} description={item.description}/>)}
    </ul>
  )
}

export default Items;
