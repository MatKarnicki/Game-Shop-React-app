import Image from "next/image";
import modifyGame from "/public/modifyGame.png";
import { useContext } from "react";
import { GameFormContext } from "../contexts/GameFormContextProvider";
import Link from "next/link";

const ModifyGameButton = () => {
  const { setModifyGame } = useContext(GameFormContext);
  return (
    <Link onClick={() => setModifyGame(true)} href="/GameForm">
      <Image
        src={modifyGame}
        alt="ModifyGames"
        width={250}
        height={150}
      ></Image>
    </Link>
  );
};
export default ModifyGameButton;
