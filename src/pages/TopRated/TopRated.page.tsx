import useMovies from "@/hooks/useMovies";
import MovieListComponent from "@/components/MovieList";
import useBackgroundImage from "@/hooks/useBackgroundImage";

function TopRatedPage() {
  const { data, isLoading, isError, hasMoreData, fetchNextData } = useMovies({
    path: "/movie/top_rated",
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

export default TopRatedPage;
