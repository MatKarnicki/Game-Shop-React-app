const developerPageReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEVELOPERS_LIST":
      return action.payload;
    case "DELETE_DEVELOPER":
      return state.filter(
        (developer) => developer.id !== action.payload.developerid
      );
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
    case "ADD_GAME_TO_DEVELOPER_GAMES":
      return state.map((developer) => {
        if (action.payload.developerid === developer.id) {
          return {
            ...developer,
            my_games_count: developer.my_games_count + 1,
            my_games: [
              ...developer.my_games,
              {
                id: action.payload.id,
                name: action.payload.name,
                metacritic: action.payload.metacritic,
                released: action.payload.released,
                background_image: action.payload.background_image,
              },
            ],
          };
        }
        return developer;
      });
    default:
      return state;
  }
};

export default developerPageReducer;
