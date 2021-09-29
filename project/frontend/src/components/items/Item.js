import CommentsContainer from '../../containers/CommentsContainer';
import { destroyItem } from '../../actions/destroyItem';

const Item = (props) => {

  let handleOnClick = () => {
    destroyItem(props.item);
    props.deleteItem(props.item);
  }

  return (
    <div className="item">
      <h3>
        {props.item.name}
        <button className="delete-item" onClick={() => handleOnClick()}> X </button>
      </h3>
      <img src={props.item.image_url} alt=""/>
      <br/>
      <h5>Description:</h5>
      <p>{props.item.description}</p>
      <br/>
      <h5>Replies:</h5>
      <CommentsContainer itemId={props.item.id}/>
    </div>
  )
}

export default Item;
