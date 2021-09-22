import cuid from 'cuid';

export default function manageItems(state = {
  items: [],
  comments: []
}, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = { name: action.item.name, description: action.item.description, id: cuid() }
      return {
        ...state,
        items: [...state.items, item]
      }

    case 'ADD_COMMENT':
      const comment = { content: action.comment.content, itemId: action.comment.itemId, id: cuid() }
      return {
        ...state,
        comments: [...state.comments, comment]
      }

    default:
      return state;
  }
};
