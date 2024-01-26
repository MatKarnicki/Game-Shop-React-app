import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { PageContext } from "../PageContextProvider";
import GameGrid from "./GameGrid";

const DeveloperDetails = () => {
  const [showGames, setShowGames] = useState(false);
  const { developers, gamesDispatch, developersDispatch } =
    useContext(PageContext);
  const router = useRouter();
  const developerDetail = developers.find(
    (developer) => developer.id === parseInt(router.query.id)
  );

  const handleDeveloperGames = () => {
    setShowGames(!showGames);
  };
  const handleDeveloperDeletion = () => {
    developersDispatch({
      type: "DELETE_DEVELOPER",
      payload: { developerid: developerDetail.id },
    });
    gamesDispatch({
      type: "REMOVE_ALL_DEVELOPER_GAMES",
      payload: {
        developerid: developerDetail.id,
        games: developerDetail.my_games,
      },
    });
  };
  return (
    <div>
      <div style={{ marginLeft: "40px" }}>
        <h1>{developerDetail?.name}</h1>
        <Image
          src={developerDetail?.image_background}
          alt={developerDetail?.name}
          width={800}
          height={400}
        ></Image>
        <h3>{`Formed: ${developerDetail?.formed_in}`}</h3>
        <h2>Amount of games: {developerDetail?.my_games_count}</h2>
        <h2>Description</h2>

        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eum
          adipisci voluptate sit laboriosam voluptatibus, voluptatum quam!
          Numquam, est facilis dolorem velit maiores eum. Tempore corrupti
          aspernatur deleniti neque fugiat, nostrum obcaecati quidem architecto
          ratione culpa at ad soluta dolor minima. Eveniet iste tempora facere,
          cum modi laudantium deserunt? Dolorem, reprehenderit. Eaque,
          temporibus? Quo, maiores earum. Non libero ad animi maxime, magni,
          iusto explicabo iure neque expedita eveniet, eos earum vel qui sed
          unde architecto quisquam amet! Vero ullam eaque magnam quos placeat
          amet suscipit iusto. Eaque ad modi doloribus pariatur iure recusandae,
          illo labore voluptates rem sunt, vitae aut?
        </h4>
        <div
          style={{
            display: "flex",
            width: "400px",
            justifyContent: "space-between",
          }}
        >
          {developerDetail?.my_games_count !== 0 && (
            <button onClick={() => handleDeveloperGames()}>
              {showGames
                ? "Collapse the list of games"
                : "Expand the list of games"}
            </button>
          )}
          <Link href="/Home">
            <button
              style={{ color: "white", background: "red" }}
              onClick={() => handleDeveloperDeletion()}
            >
              Delete Developer Forever
            </button>
          </Link>
        </div>
      </div>
      {showGames && <GameGrid games={developerDetail?.my_games} />}
    </div>
  );
};

export default DeveloperDetails;
