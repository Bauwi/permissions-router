const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.user
      };
    case "LOGOUT":
      return initialState;
    case "INCREMENT_STEP":
      return {
        ...state,
        user: {
          ...state.user,
          step: state.user.step + 1
        }
      };
    case "DECREMENT_STEP":
      return {
        ...state,
        user: {
          ...state.user,
          step: state.user.step - 1
        }
      };
    default:
      return state;
  }
};
