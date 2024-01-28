import Image from "next/image";
import modifyDevs from "/public/modifyDevs.png";
import { useContext } from "react";
import { DeveloperFormContext } from "../contexts/DeveloperFormContextProvider";
import Link from "next/link";

const ModifyDeveloperButton = () => {
  const { setModifyDeveloper } = useContext(DeveloperFormContext);
  return (
    <Link onClick={() => setModifyDeveloper(true)} href="/forms/DeveloperForm">
      <Image src={modifyDevs} alt="modifyDevs" width={250} height={150}></Image>
    </Link>
  );
};
export default ModifyDeveloperButton;
