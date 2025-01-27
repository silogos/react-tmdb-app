import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router";

import useMovies from "@/hooks/useMovies";

function useSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get("query") || "";
  const {
    data,
    isLoading,
    isError,
    hasMoreData,
    fetchNextData,
    setSearchText,
  } = useMovies({
    path: "/search/movie",
    initialSearchText: queryValue,
  });

  const handleSearch = useCallback(
    (searchText: string) => {
      setSearchText(searchText);
      searchParams.set("query", searchText);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams, setSearchText]
  );

  useEffect(() => {
    setSearchText(queryValue);
  }, [queryValue]);

  return {
    queryValue,
    data,
    isLoading,
    isError,
    hasMoreData,
    fetchNextData,
    handleSearch,
  };
}

export default useSearchPage;
