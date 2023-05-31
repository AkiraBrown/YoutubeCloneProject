import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchApi from "./api/fetch";
import Card from "./Card";

export default function SearchResults() {
  const [searchData, setSearchData] = useState([]);
  const { searchResults } = useParams();
  //const [dataRetrieveal, setDataRetrieval] = useState(false);

  async function fetchSearchData() {
    //  if (searchResults === "+") {
    // console.log("this works");
    // setDataRetrieval(false);
    // } else {
    try {
      let result = await fetchApi({
        method: "get",
        resource: `&q=${searchResults}&maxResults=20`,
      });
      //console.log(result?.data);
      setSearchData(result?.data);
      //setDataRetrieval(true);
    } catch (error) {
      console.log(`Failed to get results`);
      //setDataRetrieval(false);
    }
    // }
  }
  useEffect(() => {
    fetchSearchData();
  }, [searchResults]);

  return (
    <>
      <div className="container-fluid ">
        <Card cardData={searchData?.items} />
      </div>
    </>
  );
}
