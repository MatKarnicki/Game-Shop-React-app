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
    case "ADD_GAME":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          metacritic: action.payload.metacritic,
          released: action.payload.released,
          background_image: action.payload.background_image,
          platforms: [{ platform: { name: action.payload.platform } }],
          genres: [{ name: action.payload.genre }],
          my_developers: [
            { id: action.payload.developerid, name: action.payload.developer },
          ],
        },
      ];
    case "MODIFY_GAME":
      return state.map((game) => {
        if (game.name === action.payload.name) {
          return {
            ...game,
            name: action.payload.newname || game.name,
            metacritic: action.payload.newscore || game.metacritic,
            released: action.payload.newreleased || game.released,
            background_image:
              action.payload.newbackground_image || game.background_image,
          };
        }
        return game;
      });
    default:
      return state;
  }
};

export default gamePageReducer;
