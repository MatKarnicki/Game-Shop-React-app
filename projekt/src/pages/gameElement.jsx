import Image from "next/image";
export default function GameElement({ game }) {
  return (
    <>
      <h2>{game.name}</h2>
      <Image
        src={game.background_image || ""}
        alt={`${game.name} image`}
        width={400}
        height={200}
        loading={"eager"}
      />
      <h3>released: {game.released}</h3>
      <button>Game details</button>
    </>
  );
}
