import MovieListComponent from "@/components/MovieList";
import useBackgroundImage from "@/hooks/useBackgroundImage";
import useMovies from "@/hooks/useMovies";

function HomePage() {
  const { data, isLoading, isError, hasMoreData, fetchNextData } = useMovies({
    path: "/discover/movie",
  });
  useBackgroundImage(data[0]?.backdrop_path);

  return (
    <MovieListComponent
      movies={data}
      isLoading={isLoading}
      isError={isError}
      hasMoreData={hasMoreData}
      onLoadMore={fetchNextData}
    />
  );
}

export default HomePage;
