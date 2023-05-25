import fetchApi from "./api/fetch";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Cards() {
  const [videoData, setVideoData] = useState([]);

  async function fetchStandardResults() {
    try {
      let result = await fetchApi({
        method: "get",
      });
      console.log(result.data);
      setVideoData(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchStandardResults();
    console.log(videoData?.items);
  }, []);
  return (
    <div className="container">
      <Card cardData={videoData?.items} />
    </div>
  );
}
