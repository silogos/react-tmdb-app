import { useMemo } from "react";
import { Credit } from "../types/Movie.types";
import { useParams } from "react-router";
import useFetch from "./useFetch";

function useCredits() {
  const params = useParams();
  const { data, isLoading, isError } = useFetch<{
    id: number;
    cast: Credit[];
    crew: Credit[];
  }>({
    path: `/movie/${params.movieId}/credits`,
  });
  const casts = useMemo(() => data?.cast || [], [data?.cast]);
  const crews = useMemo(() => data?.crew || [], [data?.crew]);

  return { casts, crews, isLoading, isError };
}

export default useCredits;
