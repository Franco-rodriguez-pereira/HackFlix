import "./App.css";
import Home from "./web/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recommendation from "./components/Recommendation";
import MovieDetails from "./web/MovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/recommendation",
      element: <Recommendation />,
    },
    {
      path: "/pelicula/:id",
      element: <MovieDetails />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
