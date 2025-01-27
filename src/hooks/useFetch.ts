import { useCallback, useEffect, useState } from "react";
import { TMDB_API_KEY } from "../config";

const BASE_URL = "https://api.themoviedb.org/3";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TMDB_API_KEY}`,
};

type UseFetch<T> = {
  initialData?: T;
  path?: string;
  query?: string;
  immediately?: boolean;
};

function useFetch<T>({
  initialData,
  path = "",
  query = "",
  immediately = true,
}: UseFetch<T>) {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}${path}${query}`, {
        method: "GET",
        headers: headers,
      });
      const responseJson = await res.json();

      setData(responseJson);

      return responseJson;
    } catch (error) {
      console.error("useFetch error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [path, query]);

  useEffect(() => {
    if (immediately) getData();
  }, [immediately]);

  return {
    data,
    getData,
    isLoading,
    isError,
  };
}

export default useFetch;
