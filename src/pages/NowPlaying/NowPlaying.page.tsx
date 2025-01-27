import PageLayout from "@/layouts/Page";
import MovieListComponent from "@/components/MovieList";
import useMovies from "@/hooks/useMovies";

function NowPlayingPage() {
  const { data, isLoading, isError, hasMoreData, fetchNextData } = useMovies({
    path: "/movie/now_playing",
  });

  return (
    <PageLayout
      title="Now Playing Movies"
      titleAppendAppName={true}
      backgroundImagePath={data[0]?.backdrop_path}
    >
      <MovieListComponent
        movies={data}
        isLoading={isLoading}
        isError={isError}
        hasMoreData={hasMoreData}
        onLoadMore={fetchNextData}
      />
    </PageLayout>
  );
}

export default NowPlayingPage;
