import { destroyComment } from '../../actions/destroyComment';

const Comment = (props) => {

  let handleOnClick = () => {
    destroyComment(props.comment);
    props.deleteComment(props.comment);
  }

  return (
    <div className="comment">
      <li>
        {props.comment.content}
        <button className="delete-comment" onClick={() => handleOnClick()}> X </button>
      </li>
      <br/>
    </div>
  )
}

export default Comment;
