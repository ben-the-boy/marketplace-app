import { destroyComment } from '../../actions/destroyComment';

const Comment = (props) => {

  let handleOnClick = () => {
    destroyComment(props.comment);
    props.deleteComment(props.comment);
  }

  return (
    <div>
      <li>{props.comment.content}</li>
      <button onClick={() => handleOnClick()}> X </button>
    </div>
  )
}

export default Comment;
