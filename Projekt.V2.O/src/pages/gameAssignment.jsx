const gameAssignment = (games, developers) => {
  games?.map((game) => {
    const randomNumber = Math.floor(Math.random() * 15);
    developers[randomNumber].my_games = [
      ...(developers[randomNumber].my_games || []),
      game,
    ];
    developers[randomNumber].my_games_count =
      developers[randomNumber].my_games_count + 1 || 1;
    game.my_developers = [
      ...(game.my_developers || []),
      developers[randomNumber],
    ];
    return game;
  });
};
export default gameAssignment;
