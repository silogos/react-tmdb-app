import { Outlet, useNavigate } from "react-router";
import FilterButton from "@/components/FilterButton";
import { Hero } from "./MovieList.component";
import SearchInput from "@/components/SearchInput";
import { useCallback } from "react";

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
  const navigate = useNavigate();
  const handleSearch = useCallback((searchText: string) => {
    navigate(`/movies/search?query=${searchText}`);
  }, []);

  return (
    <>
      <div className="relative w-full min-h-screen">
        <Hero />

        <section id="movie-list" className="overflow-hidden py-4">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4">
              <div className="flex flex-row flex-nowrap overflow-x-auto gap-4">
                {categoryList.map(({ filterId, title }) => (
                  <FilterButton
                    key={filterId}
                    filterId={filterId}
                    title={title}
                  />
                ))}
              </div>

              <SearchInput onSubmit={handleSearch} />
            </div>

            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}

export default MovieListLayout;
