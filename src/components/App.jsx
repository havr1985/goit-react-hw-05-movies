import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import MovieDetails from "pages/MovieDetails";


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails/>} />

      </Route>

    </Routes>
    
  );
};
