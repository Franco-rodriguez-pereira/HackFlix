import React, { useState } from "react";
import HalfRating from "./components/Rating";
import Header from "./components/Header";
import "./App.css";
import Movies from "./components/Movies";

function App() {
  const [filterRating, setFilterRating] = useState(0);

  return (
    <div className="allContainer">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className=" row gy-4 gx-4">
          <Movies filterRating={filterRating} />
        </div>
      </div>
    </div>
  );
}

export default App;
