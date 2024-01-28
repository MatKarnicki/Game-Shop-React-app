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
    case "DELETE_GAME": {
      return state.filter((game) => game.id !== action.payload.gameid);
    }
    case "ADD_GAME": {
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
    }
    case "MODIFY_GAME": {
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
    }
    case "MODIFY_GAMES_DEVELOPER_INFO": {
      return state.map((game) => {
        return {
          ...game,
          my_developers: game.my_developers.map((developer) => {
            if (developer.name === action.payload.name) {
              return { ...developer, name: action.payload.newname };
            }
            return developer;
          }),
        };
      });
    }
    case "ADD_PLATFORM_TO_GAME": {
      return state.map((game) => {
        const platforms = game.platforms.map(
          (platform) => platform.platform.name
        );
        if (
          game.id === action.payload.gameid &&
          !platforms.includes(action.payload.platform)
        ) {
          return {
            ...game,
            platforms: [
              ...game.platforms,
              { platform: { name: action.payload.platform } },
            ],
          };
        }
        return game;
      });
    }
    case "REMOVE_PLATFORM_FROM_GAME": {
      return state.map((game) => {
        if (game.id === action.payload.gameid) {
          return {
            ...game,
            platforms: game.platforms.filter(
              (platform) => platform.platform.name !== action.payload.platform
            ),
          };
        }
        return game;
      });
    }
    case "ADD_GENRE_TO_GAME": {
      return state.map((game) => {
        const genres = game.genres.map((genre) => genre.name);
        if (
          game.id === action.payload.gameid &&
          !genres.includes(action.payload.genre)
        ) {
          return {
            ...game,
            genres: [...game.genres, { name: action.payload.genre }],
          };
        }
        return game;
      });
    }
    case "REMOVE_GENRE_FROM_GAME": {
      return state.map((game) => {
        if (game.id === action.payload.gameid) {
          return {
            ...game,
            genres: game.genres.filter(
              (genre) => genre.name !== action.payload.genre
            ),
          };
        }
        return game;
      });
    }
    case "ADD_DEVELOPER_TO_GAME": {
      return state.map((game) => {
        if (game.id === action.payload.gameid) {
          return {
            ...game,
            my_developers: [
              ...game.my_developers,
              {
                id: action.payload.developerid,
                name: action.payload.developer,
              },
            ],
          };
        }
        return game;
      });
    }
    case "REMOVE_DEVELOPER_FROM_GAME": {
      return state.map((game) => {
        if (game.id === action.payload.gameid) {
          return {
            ...game,
            my_developers: game.my_developers.filter(
              (developer) => developer.name !== action.payload.developer
            ),
          };
        }
        return game;
      });
    }
    default:
      return state;
  }
};

export default gamePageReducer;
