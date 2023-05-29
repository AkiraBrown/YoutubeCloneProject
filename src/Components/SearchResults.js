import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchApi from "./api/fetch";
import Card from "./Card";

export default function SearchResults() {
  const [searchData, setSearchData] = useState([]);
  const { searchResults } = useParams();

  async function fetchSearchData() {
    try {
      let result = await fetchApi({
        method: "get",
        resource: `&q=${searchResults}&maxResults=20`,
      });
      //console.log(result?.data);
      setSearchData(result?.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchSearchData();
  }, []);

  return (
    <div className="container">
      <Card cardData={searchData?.items} />
    </div>
  );
}
