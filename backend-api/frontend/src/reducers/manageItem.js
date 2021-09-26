import cuid from 'cuid';

export default function manageItems(state = {
  items: [],
  comments: []
}, action) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      const commentsList = action.items.map(item => state.comments.concat(item.comments))
      return {
        items: action.items,
        comments: commentsList[0]
      }

    case 'ADD_ITEM':
      const item = { name: action.item.name, description: action.item.description, id: cuid() }
      return {
        ...state,
        items: [...state.items, item]
      }

    case 'DELETE_ITEM':
      const items = state.items.filter(item => item.id !== action.id)
      return {...state, items}

    case 'ADD_COMMENT':
      const comment = { content: action.comment.content, itemId: action.comment.itemId, id: cuid() }
      return {
        ...state,
        comments: [...state.comments, comment]
      }

    case 'DELETE_COMMENT':
      const comments = state.comments.filter(comment => comment.id !== action.id)
      return {...state, comments}

    default:
      return state;
  }
};
