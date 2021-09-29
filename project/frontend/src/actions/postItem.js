export function postItem(state) {
  fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: state.name,
        description: state.description,
        image_url: state.imageUrl
      })
  })
};
