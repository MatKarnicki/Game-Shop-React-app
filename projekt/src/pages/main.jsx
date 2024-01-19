import { useState, useEffect } from "react";
import GameList from "./gameList";

export default function Home() {
  const [data, setData] = useState([]);
  const [pageNumber, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState();
  const [pageSize, setPageSize] = useState(10); //to be implemented

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=a4c87b39e1604b10b3897e51bd906f88&page=${pageNumber}&page_size=${pageSize}`
        );
        const result = await response.json();
        setData(result.results);
        setMaxPages(Math.ceil(result.count / pageSize));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [pageNumber, pageSize]);

  return (
    <GameList
      data={data}
      maxPages={maxPages}
      setPage={setPage}
      pageNumber={pageNumber}
    ></GameList>
  );
}
