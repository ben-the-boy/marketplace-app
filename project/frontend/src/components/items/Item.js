import CommentsContainer from '../../containers/CommentsContainer';
import { destroyItem } from '../../actions/destroyItem';

const Item = (props) => {

  let handleOnClick = () => {
    destroyItem(props.item);
    props.deleteItem(props.item);
  }

  return (
    <div className="item">
      <button className="delete-item" onClick={() => handleOnClick()}> X </button>
      <h3>
        {props.item.name}
      </h3>
      <img src={props.item.image_url} alt=""/>
      <h5>Description:</h5>
      <p>{props.item.description}</p>
      <CommentsContainer itemId={props.item.id}/>
    </div>
  )
}

export default Item;
