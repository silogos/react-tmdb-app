import MovieCard from "@/components/MovieCard";
import { MovieListProps } from "./MovieList.type";
import { DisplayError, DisplayNoData } from "@/components/Displays";

export function MovieCardShimmenring() {
  return (
    <div className="animate-pulse aspect-[8/12] rounded-lg bg-gray-700 bg-opacity-90" />
  );
}

export function ListLoading() {
  return Array(20)
    .fill(true)
    .map((_, idx) => <MovieCardShimmenring key={idx.toString()} />);
}

export function ListEmpty({
  isError,
  isEmpty,
}: {
  isError: boolean;
  isEmpty: boolean;
}) {
  if (isError) return <DisplayError />;

  if (isEmpty) return <DisplayNoData />;
}

function MovieList({
  movies,
  isLoading,
  isError,
  hasMoreData,
  onLoadMore,
}: MovieListProps) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            releaseDate={movie.release_date}
            title={movie.title}
            voteAverage={movie.vote_average}
          />
        ))}
        {isLoading && <ListLoading />}
      </div>

      {!isLoading && (
        <ListEmpty isEmpty={movies.length < 1} isError={isError} />
      )}

      {!isLoading && hasMoreData && (
        <button
          onClick={onLoadMore}
          className="my-8 w-full text-center py-2 p-8 bg-gray-300 rounded-lg"
        >
          Load More
        </button>
      )}
    </>
  );
}

export default MovieList;
