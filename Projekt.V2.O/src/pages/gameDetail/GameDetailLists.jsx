import Link from "next/link";
import ModifyGameButton from "../buttons/ModifyGameButton";

export default function GameDetailLists({ gameDetail }) {
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <h2>Platforms</h2>
        {gameDetail?.platforms.map((platform) => (
          <li key={platform.platform.name}>{platform.platform.name}</li>
        ))}
      </ul>

      <ul style={{ marginRight: "20px" }}>
        <h2>Genres</h2>
        {gameDetail?.genres.map((genre) => (
          <li key={genre.name}>{genre.name}</li>
        ))}
      </ul>

      <ul>
        {gameDetail?.my_developers?.length > 0 && (
          <div>
            <h2>Developers</h2>
            {gameDetail?.my_developers?.map((developer) => (
              <li key={developer.name}>
                <Link href={`/developerDetail/${developer?.id}`}>
                  {developer?.name}
                </Link>
              </li>
            ))}
          </div>
        )}
      </ul>
      <ModifyGameButton />
    </div>
  );
}
