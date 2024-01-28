import Image from "next/image";
import addGame from "/public/addGame.png";
import { useContext } from "react";
import { GameFormContext } from "../contexts/GameFormContextProvider";
import Link from "next/link";

const AddGameButton = () => {
  const { setModifyGame } = useContext(GameFormContext);
  return (
    <Link onClick={() => setModifyGame(false)} href="/GameForm">
      <Image src={addGame} alt="addGame" width={250} height={150}></Image>
    </Link>
  );
};
export default AddGameButton;
