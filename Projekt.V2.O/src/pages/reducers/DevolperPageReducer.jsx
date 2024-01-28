const developerPageReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEVELOPERS_LIST":
      return action.payload;
    case "DELETE_DEVELOPER":
      return state.filter(
        (developer) => developer.id !== action.payload.developerid
      );
    case "MODIFY_DEVELOPER":
      return state.map((developer) => {
        console.log(action);
        if (developer.name === action.payload.name) {
          return {
            ...developer,
            name: action.payload.newname || developer.name,
            formed_in: action.payload.newformed_in || developer.formed_in,
            image_background:
              action.payload.newbackground_image || developer.image_background,
          };
        }
        return developer;
      });
    case "ADD_DEVELOPER":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          formed_in: action.payload.formed_in,
          image_background: action.payload.background_image,
          my_games: [],
          my_games_count: 0,
        },
      ];
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
    case "MODIFY_DEVELOPERS_GAME_INFO":
      return state.map((developer) => {
        if (
          developer.my_games.some((game) => game.name === action.payload.name)
        ) {
          return {
            ...developer,
            my_games: developer.my_games.map((game) => {
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
            }),
          };
        }
        return developer;
      });

    default:
      return state;
  }
};

export default developerPageReducer;
