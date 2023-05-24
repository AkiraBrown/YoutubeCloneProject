import { useEffect } from "react";
import "./App.css";
import fetchApi from "./Components/api/fetch";

function App() {
  async function fetchStandardResults() {
    try {
      let result = await fetchApi({
        method: "get",
      });
      //console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchStandardResults();
  }, []);

  return <div className="App"></div>;
}

export default App;
