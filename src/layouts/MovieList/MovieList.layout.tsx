import { Outlet } from "react-router";
import FilterButton from "@/components/FilterButton";
import { MovieListHero, SearchInput } from "./MovieList.components";

function MovieListLayout() {
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

  return (
    <>
      <div className="relative w-full min-h-screen">
        <MovieListHero />

        <section id="movie-list" className="overflow-hidden py-4">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between mb-4">
              <div className="flex flex-row flex-nowrap overflow-x-auto gap-4">
                {categoryList.map(({ filterId, title }) => (
                  <FilterButton
                    key={filterId}
                    filterId={filterId}
                    title={title}
                  />
                ))}
              </div>
              <SearchInput />
            </div>

            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}

export default MovieListLayout;
