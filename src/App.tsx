import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import MovieListLayout from "@/layouts/MovieList";

import HomePage from "@/pages/Home";
import MovieDetailPage from "@/pages/MovieDetail";
import NowPlayingPage from "@/pages/NowPlaying";
import PopularPage from "@/pages/Popular";
import TopRatedPage from "@/pages/TopRated";
import UpComingPage from "@/pages/Upcoming";
import SearchPage from "@/pages/Search";

const App = () => {
  return (
    <>
      <div
        id="backdrop-overlay"
        className="fixed inset-0 bg-black bg-opacity-100 transition-opacity duration-1000"
      />
      <BrowserRouter>
        <Routes>
          <Route element={<MovieListLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies">
              <Route path="now-playing" element={<NowPlayingPage />} />
              <Route path="popular" element={<PopularPage />} />
              <Route path="top-rated" element={<TopRatedPage />} />
              <Route path="upcoming" element={<UpComingPage />} />
            </Route>
          </Route>
          <Route path="/movies/search" element={<SearchPage />} />
          <Route path="movie/:movieId" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
