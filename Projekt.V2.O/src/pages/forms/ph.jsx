gamesDispatch({
  type: "ADD_PLATFORM_TO_GAME",
  payload: {
    gameid: gameDetail.id,
    platform: values.platform,
  },
});

gamesDispatch({
  type: "ADD_GENRE_TO_GAME",
  payload: {
    gameid: gameDetail.id,
    genre: values.genre,
  },
});

const developerid = developers.find(
  (developer) => developer.name === values.developer
).id;
gamesDispatch({
  type: "ADD_DEVELOPER_TO_GAME",
  payload: {
    gameid: gameDetail.id,
    developer: values.developer,
    developerid: developerid,
  },
});
developersDispatch({
  type: "ADD_GAME_TO_DEVELOPER_GAMES",
  payload: {
    developerid: developerid,
    id: gameDetail.id,
    name: gameDetail.name,
    metacritic: gameDetail.metacritic,
    released: gameDetail.released,
    background_image: gameDetail.background_image,
  },
});
