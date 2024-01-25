const developerPageReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEVELOPERS_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default developerPageReducer;
