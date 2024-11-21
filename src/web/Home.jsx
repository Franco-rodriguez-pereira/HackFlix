import React, { useState } from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";

function Home() {
  const [filterRating, setFilterRating] = useState(0);

  return (
    <div className="allContainer">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="row gy-4 gx-4">
          <Movies
            filterRating={filterRating}
            setFilterRating={setFilterRating}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
