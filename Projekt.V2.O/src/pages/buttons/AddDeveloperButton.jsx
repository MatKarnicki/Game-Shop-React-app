import Image from "next/image";
import addDevs from "/public/addDevs.png";
import { useContext } from "react";
import { DeveloperFormContext } from "../contexts/DeveloperFormContextProvider";
import Link from "next/link";

const AddDeveloperButton = () => {
  const { setModifyDeveloper } = useContext(DeveloperFormContext);
  return (
    <Link onClick={() => setModifyDeveloper(false)} href="/forms/DeveloperForm">
      <Image src={addDevs} alt="addDevs" width={250} height={150}></Image>
    </Link>
  );
};
export default AddDeveloperButton;
