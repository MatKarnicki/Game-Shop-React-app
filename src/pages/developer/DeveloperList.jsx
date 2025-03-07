import { useContext, useEffect, useState } from "react";
import { PageContext } from "../contexts/PageContextProvider";
import DeveloperElement from "./DeveloperElement";
import DeveloperFilterMenu from "./DeveloperFilterMenu";
import AddDeveloperButton from "../buttons/AddDeveloperButton";
import ModifyDeveloperButton from "../buttons/ModifyDeveloperButton";

const DeveloperList = () => {
  const { developers } = useContext(PageContext);
  const [developerList, setDeveloperList] = useState(developers);
  useEffect(() => setDeveloperList(developers), [developers]);
  return (
    <div>
      <DeveloperFilterMenu setDeveloperList={setDeveloperList} />
      <div
        style={{
          display: "flex",
          width: "500px",
          justifyContent: "space-between",
          marginLeft: "30px",
        }}
      >
        <AddDeveloperButton />
        <ModifyDeveloperButton />
      </div>
      <ul style={{ listStyleType: "none" }}>
        {developerList?.map((developer) => (
          <li key={developer.id}>
            <DeveloperElement developer={developer} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DeveloperList;
