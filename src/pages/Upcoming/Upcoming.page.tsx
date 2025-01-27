import PageLayout from "@/layouts/Page";
import MovieListComponent from "@/components/MovieList";
import useMovies from "@/hooks/useMovies";

function UpComingPage() {
  const { data, isLoading, isError, hasMoreData, fetchNextData } = useMovies({
    path: "/movie/upcoming",
  });

  return (
    <PageLayout
      title="Upcoming Movies"
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

export default UpComingPage;
