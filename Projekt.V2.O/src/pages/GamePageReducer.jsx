const gamePageReducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME_LIST":
      return action.payload;
    case "REMOVE_ALL_DEVELOPER_GAMES":
      const games = action.payload.games.map((game) => game.id);
      return state.map((game) => {
        if (games.includes(game.id)) {
          return {
            ...game,
            my_developers: game.my_developers.filter(
              (developer) => developer.id !== action.payload.developerid
            ),
          };
        }

        return game;
      });
    case "DELETE_GAME":
      return state.filter((game) => game.id !== action.payload.gameid);
    default:
      return state;
  }
};

export default gamePageReducer;
