import Comment from './Comment';

const Comments = ({comments}) => {

  const associatedComments = this.props.comments.filter(comment => comment.ItemId === this.props.itemID)

  return (
    <ul>
      {associatedComments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
    </ul>
  )
}

export default Comments;
