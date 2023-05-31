// import fetchApi from "./api/fetch";
// import Card from "./Card";
// import { useEffect, useState } from "react";

export default function Cards() {
  /*

  const [videoData, setVideoData] = useState([]);

  async function fetchStandardResults() {
    try {
      let result = await fetchApi({
        method: "get",
        resource: "&maxResults=18",
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
  
  */

  return (
    <div className="container-fluid position-absolute top-50 start-50 translate-middle text-center">
      <div className="alert alert-danger" role="alert">
        No Search Results Yet!, Please submit a search above!
      </div>
    </div>
  );
}
