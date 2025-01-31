import { Movie } from "@/types/Movie.types";

export type MovieListProps = {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  onReload?: () => void;
  hasMoreData: boolean;
  onLoadMore: () => void;
};

export type MoviListErrorProps = {
  onReload?: () => void;
};
