import MovieCard from "./components/MovieCard";
import "./App.css";
import Header from "./components/Header";

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
