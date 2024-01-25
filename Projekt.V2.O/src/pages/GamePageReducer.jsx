const gamePageReducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME_LIST":
      return action.payload;
    case "DELETE_GAME":
      return state.filter((game) => game.id !== action.payload.gameID);
    default:
      return state;
  }
};

export default gamePageReducer;
