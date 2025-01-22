import { useParams } from "react-router";
import { MovieDetail } from "../types/Movie.types";
import useFetch from "./useFetch";

function useMovieDetail() {
  const params = useParams();
  const { data, isLoading, isError } = useFetch<MovieDetail>({
    path: `/movie/${params.movieId}`,
  });

  return {
    data,
    isLoading,
    isError,
  };
}

export default useMovieDetail;
