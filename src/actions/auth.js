// Action creators
export const login = user => ({
  type: "LOGIN",
  user
});

export const logout = () => ({
  type: "LOGOUT"
});

export const incrementStep = () => ({
  type: "INCREMENT_STEP"
});

export const decrementStep = () => ({
  type: "DECREMENT_STEP"
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
