import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const GameDetail = () => {
  const router = useRouter();
  const [gameDetail, setGameDetail] = useState();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${router.query.id}?key=a4c87b39e1604b10b3897e51bd906f88`
        );
        const result = await response.json();
        setGameDetail(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDetail();
  }, [router.query.id]);
  //wyselekcjonowac dane
  return <p>Post: {JSON.stringify(gameDetail)}</p>;
};

export default GameDetail;
