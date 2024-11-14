import ReactStars from "react-rating-stars-component";
import HalfRating from "./components/Rating";
import "./App.css";
function App() {
  return (
    <div className="allContainer">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div>
          <HalfRating />
        </div>
        <div>
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default App;
