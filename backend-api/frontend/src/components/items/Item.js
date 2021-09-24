import CommentsContainer from '../../containers/CommentsContainer';

const Item = (props) => {

  let handleOnClick = () => {
    props.deleteItem(props.item)
  }

  return (
    <div>
      <li>
        {props.item.name}
        <button onClick={() => handleOnClick()}> X </button>
        <CommentsContainer itemId={props.item.id}/>
      </li>
    </div>
  )
}

export default Item;
