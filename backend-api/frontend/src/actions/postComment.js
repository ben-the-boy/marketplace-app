export function postComment(comment, addComment) {
    fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment.content,
          item_id: comment.itemId
        })
      })
      .then(response => response.json())
      .then(comment => addComment(comment))
  };
