import PageLayout from "@/layouts/Page";
import MovieListComponent from "@/components/MovieList";

import { Header, Search } from "./Search.component";
import useSearchPage from "./Search.hook";

function SearchPage() {
  const {
    queryValue,
    fetchData,
    data,
    isLoading,
    isError,
    hasMoreData,
    fetchNextData,
    handleSearch,
  } = useSearchPage();

  return (
    <PageLayout
      title={`Results for "${queryValue}"`}
      titleAppendAppName={true}
      backgroundImagePath={data[0]?.backdrop_path}
    >
      <div className="relative w-full min-h-screen">
        <Header />

        <section id="movie-list" className="overflow-hidden py-4">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <Search queryValue={queryValue} handleSearch={handleSearch} />
            <MovieListComponent
              movies={data}
              isLoading={isLoading}
              isError={isError}
              onReload={fetchData}
              hasMoreData={hasMoreData}
              onLoadMore={fetchNextData}
            />
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default SearchPage;
