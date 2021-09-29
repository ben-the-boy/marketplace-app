import Comment from './Comment';

const Comments = (props) => {

  const associatedComments = props.comments.filter(comment => comment.itemId === props.itemId)

  return (
    <div className="comments-list">
        <ul>
          {associatedComments.map((comment) => <Comment key={comment.id} comment={comment} deleteComment={props.deleteComment}/>)}
        </ul>
    </div>
  )
}

export default Comments;
