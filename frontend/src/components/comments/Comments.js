import Comment from './Comment';

const Comments = ({comments, itemId}) => {

  const associatedComments = comments.filter(comment => comment.itemId === itemId)

  console.log(associatedComments)

  return (
    <ul>
      {associatedComments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
    </ul>
  )
}

export default Comments;
