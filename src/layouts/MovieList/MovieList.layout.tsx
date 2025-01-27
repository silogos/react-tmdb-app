import { Outlet } from "react-router";

import { Filter, Hero } from "./MovieList.component";
import useMovieListLayout from "./MovieList.hook";

const categoryList = [
  {
    filterId: "/",
    title: "All",
  },
  {
    filterId: "/movies/now-playing",
    title: "Now Playing",
  },
  {
    filterId: "/movies/popular",
    title: "Popular",
  },
  {
    filterId: "/movies/top-rated",
    title: "Top Rated",
  },
  {
    filterId: "/movies/upcoming",
    title: "Upcoming",
  },
];

function MovieListLayout() {
  const { handleSearch } = useMovieListLayout();

  return (
    <>
      <div className="relative w-full min-h-screen">
        <Hero />

        <section id="movie-list" className="overflow-hidden py-4">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <Filter categoryList={categoryList} handleSearch={handleSearch} />
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}

export default MovieListLayout;
