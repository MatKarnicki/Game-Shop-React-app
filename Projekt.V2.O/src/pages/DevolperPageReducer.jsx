const developerPageReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEVELOPER_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default developerPageReducer;
