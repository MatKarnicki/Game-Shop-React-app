import Image from "next/image";
// import Link from "next/link";
export default function GameElement({ game }) {
  const width = 400;
  return (
    <>
      <h2>{game?.name}</h2>
      {/* <Link href={`/gameDetail/${game?.id}`}> */}
      <Image
        src={game?.background_image}
        alt={`${game?.name} image`}
        width={width}
        height={200}
        quality={1}
      />
      {/* </Link> */}
      <div
        style={{
          width: width,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ marginRight: "10px" }}>Released: {game?.released}</h3>
        <h3>
          Score:
          {game?.metacritic === null
            ? (game.metacritic = Math.floor(Math.random() * (100 - 2) + 1))
            : game?.metacritic}
        </h3>
      </div>
    </>
  );
}
