import CommentsContainer from '../../containers/CommentsContainer';
import { destroyItem } from '../../actions/destroyItem';

const Item = (props) => {

  let handleOnClick = () => {
    destroyItem(props.item);
    props.deleteItem(props.item);
  }

  return (
    <div className="item-info">
      {props.item.name}
      <button onClick={() => handleOnClick()}> X </button>
      <br/>
      <img src={props.item.image_url} alt=""/>
      <br/>
      Description:
      <br/>
      {props.item.description}
      <br/>
      Comments:
      <br/>
      <CommentsContainer itemId={props.item.id}/>
    </div>
  )
}

export default Item;
