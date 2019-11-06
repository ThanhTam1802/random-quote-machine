const initalState = {
  author: '',
  content: ''
};

const randomQuoteReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'NEW_QUOTE':
      const { author, content } = action.newQuote;
      return { ...state, author, content }
    default:
      return state;
  }

};

export default randomQuoteReducer;