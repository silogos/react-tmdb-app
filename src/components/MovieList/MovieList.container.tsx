import MovieCard from "@/components/MovieCard";
import { MovieListProps } from "./MovieList.type";
import { ListEmpty, ListError, ListLoading } from "./MovieList.component";

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
        <>
          {isError && <ListError />}
          {!isError && movies.length < 1 && <ListEmpty />}
          {hasMoreData && (
            <button
              onClick={onLoadMore}
              className="my-8 w-full text-center py-2 p-8 bg-gray-300 rounded-lg"
            >
              Load More
            </button>
          )}
        </>
      )}
    </>
  );
}

export default MovieList;
