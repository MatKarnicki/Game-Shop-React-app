const developerPageReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEVELOPERS_LIST":
      return action.payload;
    //TODO: case "REMOVE_GAME_FROM_DEVELOPER":
    default:
      return state;
  }
};

export default developerPageReducer;
