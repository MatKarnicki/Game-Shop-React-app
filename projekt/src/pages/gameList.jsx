import GameElement from "./gameElement";
import PageHandler from "./pageHandler";

export default function GameList({ data, pageNumber, setPage, maxPages }) {
  //Tymczasowo props drilling, TODO:pageHandlerContext
  return (
    <>
      <PageHandler
        pageNumber={pageNumber}
        setPage={setPage}
        maxPages={maxPages}
      ></PageHandler>
      <ul>
        {data.map((game) => (
          <li key={game.id}>
            <GameElement game={game} />
          </li>
        ))}
      </ul>
      <PageHandler
        pageNumber={pageNumber}
        setPage={setPage}
        maxPages={maxPages}
      ></PageHandler>
    </>
  );
}
