import { useEffect } from "react";
import "./App.css";
import fetchApi from "./Components/api/fetch";
//--------------------------------------//
import Header from "./Components/Header";

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

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
