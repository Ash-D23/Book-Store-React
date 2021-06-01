

const INITIAL_STATE = {
  searchhidden: true,
  searchitems: ["Computer Science","Mechanical","Electrical","Auto-mobile","Management"]
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH_HIDDEN':
      return {
        ...state,
        searchhidden: !state.searchhidden
      };
    case 'Search_term':
      return {
        ...state,
        searchterm: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
