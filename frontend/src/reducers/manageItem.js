import cuid from 'cuid';

export default function manageItems(state = {
  items: [],
}, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = { name: action.item.name, description: action.item.description, id: cuid() }
      console.log(item)
      return {
        items: [...state.items, item]
      }

    default:
      return state;
  }
};
