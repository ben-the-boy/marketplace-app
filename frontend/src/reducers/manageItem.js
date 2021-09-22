export default function manageItems(state = {
  items: [],
}, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = { name: action.name, description: action.description }
      return {
        items: [ ...state.items, item]
      }

    default:
      return state;
  }
};
