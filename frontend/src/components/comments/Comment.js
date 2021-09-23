const Comment = (props) => {

  let handleOnClick = () => {
    props.deleteComment(props.comment)
  }

  return (
    <div>
      <li>{props.comment.content}</li>
      <button onClick={() => handleOnClick()}> X </button>
    </div>
  )
}

export default Comment;
