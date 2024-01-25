const developerPageReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEVELOPERS_LIST":
      return action.payload;
    case "REMOVE_GAME_FROM_DEVELOPER":
      const developersID = action.payload.developers.map(
        (developer) => developer.id
      );
      return state.map((developer) => {
        if (developersID.includes(developer.id)) {
          return {
            ...developer,
            my_games_count: developer.my_games_count - 1,
            my_games: developer.my_games.filter(
              (game) => game.id !== action.payload.gameid
            ),
          };
        }
        return developer;
      });

    default:
      return state;
  }
};

export default developerPageReducer;
