import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
  return (
    <div>
      <ul>
        {gameDetail?.developers.map((developer) => (
          <li key={developer.id}>
            <Link href={`/developerDetail/${developer.id}`}>
              {developer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameDetail;
