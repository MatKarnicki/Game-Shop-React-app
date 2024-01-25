import { useContext, useEffect, useState } from "react";
import { PageContext } from "./PageContextProvider";
import DeveloperElement from "./DeveloperElement";
import DeveloperFilterMenu from "./DeveloperFilterMenu";

const DeveloperList = () => {
  const { developers } = useContext(PageContext);
  const [developerList, setDeveloperList] = useState(developers);
  useEffect(() => setDeveloperList(developers), [developers]);
  return (
    <div>
      <DeveloperFilterMenu setDeveloperList={setDeveloperList} />
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
