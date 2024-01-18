import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const DeveloperDetail = () => {
  const router = useRouter();
  const [developerDetail, setDeveloperDetail] = useState();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/developers/${router.query.id}?key=a4c87b39e1604b10b3897e51bd906f88`
        );
        const result = await response.json();
        setDeveloperDetail(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDetail();
  }, [router.query.id]);
  //wyselekcjonowac dane
  return <p>Post: {JSON.stringify(developerDetail)}</p>;
};

export default DeveloperDetail;
