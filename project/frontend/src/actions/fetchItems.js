export function fetchItems() {
  return (dispatch) => {
    fetch("/items")
      .then((response) => response.json())
      .then((items) => dispatch({ type: "LOAD_ITEMS", items}));
  };
}
