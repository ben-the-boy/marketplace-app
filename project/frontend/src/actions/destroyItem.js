export function destroyItem(item) {
  fetch(`http://localhost:3000/items/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
};
