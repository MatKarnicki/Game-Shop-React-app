import Image from "next/image";
import Link from "next/link";
export default function GameElement({ game }) {
  return (
    <>
      <h2>{game.name}</h2>
      <Link href={`/gameDetail/${game.id}`}>
        <Image
          src={game.background_image || ""}
          alt={`${game.name} image`}
          width={400}
          height={200}
          quality={1}
        />
      </Link>
      <h3>released: {game.released}</h3>
    </>
  );
}
