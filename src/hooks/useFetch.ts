import { useCallback, useEffect, useState } from "react";
import { TMDB_API_KEY } from "../config";
import { wait } from "@/utils/Common.utils";

const BASE_URL = "https://api.themoviedb.org/3";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TMDB_API_KEY}`,
};

type UseFetchOptions<T> = {
  initialData?: T;
  path?: string;
  query?: string;
  immediately?: boolean;
  delay?: number;
};

function useFetch<T>({
  initialData,
  path = "",
  query = "",
  immediately = true,
  delay = 600,
}: UseFetchOptions<T>) {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const [fetchData] = await Promise.allSettled([
        fetch(`${BASE_URL}${path}${query}`, {
          method: "GET",
          headers: headers,
        }),
        wait(delay),
      ]);
      if (fetchData.status !== "fulfilled" || !fetchData.value.ok)
        throw new Error("Error fetch data");

      const response = fetchData.value;
      const responseJson = await response.json();

      setData(responseJson);

      return responseJson;
    } catch (error) {
      console.error("useFetch error:", error);
      setIsError(true);
      throw error;
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
