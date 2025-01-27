import MovieListComponent from "@/components/MovieList";
import SearchInput from "@/components/SearchInput";
import useBackgroundImage from "@/hooks/useBackgroundImage";
import useMovies from "@/hooks/useMovies";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Header } from "./Search.component";

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

  const handleSearch = useCallback(
    (searchText: string) => {
      setSearchText(searchText);
      searchParams.set("query", searchText);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams, setSearchText]
  );

  useEffect(() => {
    setSearchText(defaultValue);
  }, [defaultValue]);

  return (
    <div className="relative w-full min-h-screen">
      <Header />

      <section id="movie-list" className="overflow-hidden py-4">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
          <h3 className="text-gray-300 mb-4">Search for: {defaultValue}</h3>
          <SearchInput className="mb-4" onSubmit={handleSearch} />
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
