export function fetchItems() {
  return (dispatch) => {
    fetch("/items")
      .then((response) => response.json())
      .then((items) => console.log(items));
  };
}
