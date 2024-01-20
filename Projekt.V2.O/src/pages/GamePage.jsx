import GameList from "./GameList";
import GamePageContextProvider from "./GamePageContextProvider";
const Home = () => {
  return (
    <GamePageContextProvider>
      <GameList />
    </GamePageContextProvider>
  );
};
export default Home;
