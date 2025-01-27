import PageLayout from "@/layouts/Page";
import MovieListComponent from "@/components/MovieList";
import useMovies from "@/hooks/useMovies";

function HomePage() {
  const { data, isLoading, isError, hasMoreData, fetchNextData } = useMovies({
    path: "/discover/movie",
  });

  return (
    <PageLayout backgroundImagePath={data[0]?.backdrop_path}>
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

export default HomePage;
