import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import GameGrid from "../gameGrid";
const DeveloperDetail = () => {
  const router = useRouter();
  const [developerDetail, setDeveloperDetail] = useState();
  const [developerGames, setDeveloperGames] = useState();
  const [showGames, setShowGames] = useState(false);
  const [pageNumber, setPage] = useState(1);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/developers/${router.query.id}?key=a4c87b39e1604b10b3897e51bd906f88`
        );
        const result = await response.json();
        setDeveloperDetail(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDetail();
  }, [router.query.id]);
  useEffect(() => {
    const fetchDeveloperGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=a4c87b39e1604b10b3897e51bd906f88&developers=${router.query.id}&page=${pageNumber}`
        );
        const result = await response.json();
        setDeveloperGames(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDeveloperGames();
  }, [router.query.id, pageNumber]);

  const handleDeveloperGames = () => {
    setShowGames(!showGames);
  };
  return (
    <div>
      <h1>{developerDetail?.name}</h1>
      <Image
        src={developerDetail?.image_background}
        alt={developerDetail?.name}
        width={800}
        height={400}
      ></Image>
      {console.log(developerGames)}
      <h3>{`Amount of games: ${developerDetail?.games_count}`}</h3>
      <button onClick={() => handleDeveloperGames()}>
        {showGames ? "Collapse the list of games" : "Expand the list of games"}
      </button>
      <br />
      <br />
      {showGames && (
        <GameGrid
          data={developerGames.results}
          maxPages={Math.ceil(developerGames?.count / 20)}
          setPage={setPage}
          pageNumber={pageNumber}
        ></GameGrid>
      )}
    </div>
  );
};

export default DeveloperDetail;
