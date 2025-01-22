import useMovies from "@/hooks/useMovies";
import MovieListComponent from "@/components/MovieList";
import useBackgroundImage from "@/hooks/useBackgroundImage";

function UpComingPage() {
  const { data, isLoading, isError, hasMoreData, fetchNextData } = useMovies({
    path: "/movie/upcoming",
  });
  useBackgroundImage(data[0]?.backdrop_path);

  return (
    <MovieListComponent
      movies={data}
      isLoading={isLoading}
      isError={isError}
      hasMoreData={hasMoreData}
      onLoadMore={() => {
        console.log("Load more clicked");
        fetchNextData();
      }}
    />
  );
}

export default UpComingPage;
