import { useEffect } from "react";
import "./App.css";

function App() {
  const testYoutubeAPI = () => {
    //console.log(process.env.REACT_APP_DEVELOPMENT_API_KEY);
  };
  useEffect(() => {
    testYoutubeAPI();
  });

  return <div className="App"></div>;
}

export default App;
