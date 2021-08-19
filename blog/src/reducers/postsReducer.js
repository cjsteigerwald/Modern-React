const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  } // switch()
}; //postsReducer

export default postReducer;
