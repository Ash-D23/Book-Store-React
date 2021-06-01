export const toggleSearchbarHidden = () => ({
  type: 'TOGGLE_SEARCH_HIDDEN'
});

export const Searchterm = term => ({
  type: 'Search_term',
  payload: term
});
