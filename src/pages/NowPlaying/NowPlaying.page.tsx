import MovieListComponent from "@/components/MovieList";
import useBackgroundImage from "@/hooks/useBackgroundImage";
import useMovies from "@/hooks/useMovies";

function NowPlayingPage() {
  const { data, isLoading, isError, hasMoreData, fetchNextData } = useMovies({
    path: "/movie/now_playing",
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

export default NowPlayingPage;
