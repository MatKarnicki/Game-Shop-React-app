import { useState, useEffect } from "react";
import GameList from "./gameList";

export default function Home() {
  const [data, setData] = useState([]);
  const [pageNumber, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState();
  const [pageSize, setPageSize] = useState(10); //to be implemented
  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=a4c87b39e1604b10b3897e51bd906f88&page=${page}&page_size=${pageSize}`
      );
      const result = await response.json();
      setData(result.results);
      console.log(result);
      setMaxPages(Math.ceil(result.count / pageSize));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(pageNumber);
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
