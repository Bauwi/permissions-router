// Action creators
export const login = user => ({
  type: "LOGIN",
  user
});

export const logout = () => ({
  type: "LOGOUT"
});

export const updateUser = updates => ({
  type: "UPDATE_USER",
  updates
});

// Middlewares
export const startLogin = user => dispatch => {
  localStorage.setItem("user", JSON.stringify(user));
  return dispatch(login(user));
};

export const startLogout = () => dispatch => {
  localStorage.removeItem("user");
  return dispatch(logout());
};

export const startUpdateUser = updates => (dispatch, getState) => {
  const newUser = { ...getState().auth.user, updates };
  localStorage.setItem("user", JSON.stringify(newUser));
  dispatch(updateUser(updates));
};
