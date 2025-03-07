import Image from "next/image";
import Link from "next/link";
import pageMissing from "/public/404.png";
const custom404 = () => {
  return (
    <Link href="/Home">
      <Image
        style={{ position: "absolute", marginLeft: "30em" }}
        src={pageMissing}
        alt="PageMissing"
        width={700}
        height={700}
      ></Image>
    </Link>
  );
};
export default custom404;
