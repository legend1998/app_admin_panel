export const initialState = {
  user: null,
  url: "https://vup-api.herokuapp.com",
  secret_key: "dklfhaewowi32047230jlks",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
