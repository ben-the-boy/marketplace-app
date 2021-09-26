import Comment from './Comment';

const Comments = (props) => {

  const associatedComments = props.comments.filter(comment => comment.item_id === props.itemId)

  return (
    <ul>
      {associatedComments.map((comment) => <Comment key={comment.id} comment={comment} deleteComment={props.deleteComment}/>)}
    </ul>
  )
}

export default Comments;
