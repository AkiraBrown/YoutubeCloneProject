import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//--------------------------------------//
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/:channel"></Route>
          <Route path="/videos/:videoId"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
