import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([]);
  const [pageNumber, setPage] = useState([1]);
  const [maxPages, setMaxPages] = useState();
  const [pageSize, setPageSize] = useState(10); //to be implemented
  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=a4c87b39e1604b10b3897e51bd906f88&page=${page}&page_size=${pageSize}`
        );
        const result = await response.json();
        setData(result.results);
        setMaxPages(Math.ceil(result.count / pageSize));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(pageNumber);
  }, [pageNumber, pageSize]);
  const handleNextPage = () => {
    if (pageNumber < maxPages) {
      setPage(parseInt(pageNumber) + 1);
    }
  };
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPage(pageNumber - 1);
    }
  };
  return (
    <>
      <button onClick={handlePreviousPage}>Poprzednia strona</button>
      {pageNumber} / {maxPages}
      <button onClick={handleNextPage}>Nastepna strona</button>
      {/*<button onClick={() => setPageSize(40)}> </button>*/}
      <ul>
        {data.map((game) => (
          <li key={game.id}>
            <h2>{game.name} </h2>

            <Image
              src={game.background_image}
              alt={`${game.name} image`}
              width={800}
              height={400}
              loading={"eager"}
            />
            <h3>released: {game.released}</h3>
            <button>Game details</button>
          </li>
        ))}
      </ul>
    </>
  );
}
