import fetchApi from "./api/fetch";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Cards() {
  const [videoData, setVideoData] = useState([]);

  async function fetchStandardResults() {
    try {
      let result = await fetchApi({
        method: "get",
        resource: "&maxResults=15",
      });
      //console.log(result.data);
      setVideoData(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchStandardResults();
    //console.log(videoData?.items);
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card cardData={videoData?.items} />
      </div>
    </div>
  );
}
