import ReactStars from "react-rating-stars-component";
import HalfRating from "./components/Rating";
import Header from "./components/Header";
import "./App.css";
import Movies from "./components/Movies";
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
        <div className="row">
          <Movies />
        </div>
      </div>
    </div>
  );
}

export default App;
