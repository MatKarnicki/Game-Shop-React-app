import Link from "next/link";
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
        <h2>Developers</h2>
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
}
