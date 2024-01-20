import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import GameDetailLists from "./GameDetailLists";
import Link from "next/link";

const GameDetailComponent = () => {
  const router = useRouter();
  const [gameDetail, setGameDetail] = useState();

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games/${router.query.id}?key=a4c87b39e1604b10b3897e51bd906f88`
      );
      const result = await response.json();
      setGameDetail(result);
    };
    fetchDetail();
  }, [router.query.id]);

  return (
    <div>
      <Link href="/GamePage" replace={false}>
        <div>POWROT NA STRONE GLOWNA</div>
      </Link>
      <h1>{gameDetail?.name}</h1>
      <Image
        src={gameDetail?.background_image}
        alt={gameDetail?.name}
        width={800}
        height={400}
      ></Image>
      <h3>{gameDetail?.tba ? "TBA " : `Released: ${gameDetail?.released}`}</h3>
      <h2>Metacritic Score: {gameDetail?.metacritic}</h2>
      <GameDetailLists gameDetail={gameDetail}></GameDetailLists>
      <h2>Description</h2>
      <h4>{gameDetail?.description_raw}</h4>
    </div>
  );
};

export default GameDetailComponent;
