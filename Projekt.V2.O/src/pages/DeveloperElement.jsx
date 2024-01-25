import Image from "next/image";
import Link from "next/link";
import getRandomDate from "./getRandomDate";
export default function DeveloperElement({ developer }) {
  const width = 400;
  return (
    <>
      <h2>{developer?.name}</h2>
      <Link href={`developerDetail/${developer?.id}`}>
        <Image
          src={developer?.image_background}
          alt={`${developer?.name} image`}
          width={width}
          height={200}
          quality={1}
        />
      </Link>
      <div
        style={{
          width: width,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ marginRight: "10px" }}>
          Games Count: {developer.my_games_count || 0}
        </h3>
        <h3>
          Formed in:
          {developer.formed_in
            ? developer.formed_in
            : (developer.formed_in = getRandomDate())}
        </h3>
      </div>
    </>
  );
}
