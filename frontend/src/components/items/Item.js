import CommentsContainer from '../../containers/CommentsContainer';

const Item = ({item}) => {
  return (
    <div>
      <li>
        {item.name}
        <CommentsContainer itemId={item.id}/>
      </li>
    </div>
  )
}

export default Item;
