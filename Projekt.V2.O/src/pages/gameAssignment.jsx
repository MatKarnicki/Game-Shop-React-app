const gameAssignment = (games, developers) => {
  developers?.map((developer) => {
    developer.my_games_count = 0;
  });
  games?.map((game) => {
    const randomNumber = Math.floor(Math.random() * developers.length);
    developers[randomNumber].my_games = [
      ...(developers[randomNumber].my_games || []),
      game,
    ];
    developers[randomNumber].my_games_count =
      developers[randomNumber].my_games_count + 1;
    game.my_developers = [
      ...(game.my_developers || []),
      developers[randomNumber],
    ];
    return game;
  });
};
export default gameAssignment;
