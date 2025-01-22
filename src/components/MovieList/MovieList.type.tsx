import { Movie } from "@/types/Movie.types";

export type MovieListProps = {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  hasMoreData: boolean;
  onLoadMore: () => void;
};
