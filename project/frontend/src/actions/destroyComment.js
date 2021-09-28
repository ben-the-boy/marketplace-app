export function destroyComment(comment) {
  fetch(`http://localhost:3000/comments/${comment.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
};
