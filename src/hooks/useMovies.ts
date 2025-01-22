import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Movie } from "@/types/Movie.types";
import useFetch from "./useFetch";

type MoviesList = Record<number, Movie[]>;

function usePrev<T>(value: T) {
  const prev = useRef<T>(value);
  useEffect(() => {
    prev.current = value;
  }, [value]);

  return prev.current;
}

function useMovies({
  path,
  initialSearchText = "",
}: {
  path: string;
  initialSearchText?: string;
}) {
  const [searchText, setSearchText] = useState(initialSearchText);
  const prevSearchText = usePrev(searchText);
  const [currentPage, setCurrentPage] = useState(1);
  const query = useMemo(() => {
    const searchQuery = searchText ? `&query=${searchText}` : "";
    return `?language=en-US&page=${currentPage}${searchQuery}`;
  }, [currentPage, searchText]);

  const { getData } = useFetch({
    path: path,
    query: query,
    immediately: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState<MoviesList>({});
  const [hasMoreData, setHasMoreData] = useState(false);

  const data = useMemo(
    () => Object.entries(movies).flatMap(([, value]) => value) || [],
    [movies]
  );

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res: {
        page: number;
        total_pages: number;
        results: Movie[];
      } = await getData();

      setMovies((prev) => ({
        ...prev,
        [res.page]: res.results,
      }));
      setHasMoreData(res.page < res.total_pages);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [getData]);

  const fetchNextData = () => {
    if (isLoading || !hasMoreData) return;
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (prevSearchText !== searchText) {
      setMovies({});
      setCurrentPage(1);

      return;
    }
    fetchData();
  }, [fetchData, prevSearchText, searchText]);

  return {
    data,
    isLoading,
    isError,
    fetchData,
    hasMoreData,
    fetchNextData,
    searchText,
    setSearchText,
  };
}

export default useMovies;
