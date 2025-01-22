import MovieListComponent from "@/components/MovieList";
import useBackgroundImage from "@/hooks/useBackgroundImage";
import useMovies from "@/hooks/useMovies";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValue = searchParams.get("query") || "";
  const {
    data,
    isLoading,
    isError,
    hasMoreData,
    fetchNextData,
    setSearchText,
  } = useMovies({
    path: "/search/movie",
    initialSearchText: defaultValue,
  });
  useBackgroundImage(data[0]?.backdrop_path);

  useEffect(() => {
    setSearchText(defaultValue);
  }, [defaultValue]);

  return (
    <div className="relative w-full min-h-screen">
      <header className="overflow-hidden bg-gray-300 bg-opacity-20">
        <div className="mx-auto max-w-screen-xl px-8 py-4">
          <div className="flex items-stretch">
            <NavLink
              to="/"
              className="cursor-pointer hover:underline flex flex-row items-center text-base rounded-lg text-nowrap text-gray-400"
            >
              <ChevronLeftIcon className="size-6 inline" />
              <span className="hidden lg:block">Back to list</span>
            </NavLink>
          </div>
        </div>
      </header>

      <section id="movie-list" className="overflow-hidden py-4">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
          <h3 className="text-gray-300 mb-4">Search for: {defaultValue}</h3>
          <form
            className="mb-8"
            onSubmit={(evt) => {
              evt.preventDefault();
              const searctInput = evt.currentTarget.query.value;
              setSearchText(searctInput);
              searchParams.set("query", searctInput);
              setSearchParams(searchParams);
              console.log("Submited", evt.currentTarget.query.value);
            }}
          >
            <input
              name="query"
              type="search"
              className="w-full border-2 rounded-lg  px-4 py-2 bg-white"
              placeholder="Search..."
              minLength={3}
              required
            />
          </form>
          <MovieListComponent
            movies={data}
            isLoading={isLoading}
            isError={isError}
            hasMoreData={hasMoreData}
            onLoadMore={fetchNextData}
          />
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
