import CommentsContainer from '../../containers/CommentsContainer';
import { destroyItem } from '../../actions/destroyItem';

const Item = (props) => {

  let handleOnClick = () => {
    destroyItem(props.item);
    props.deleteItem(props.item);
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
