export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

export const signout = user => ({
  type: 'signout',
  payload: null
});
