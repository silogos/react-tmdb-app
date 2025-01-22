import { useCallback, useEffect, useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjBhMWViZWVkZjAzZTEwMzU3MzhjZTlhM2RmMDMwMiIsIm5iZiI6MTczNzQyNzc0NC4yNTYsInN1YiI6IjY3OGYwYjIwNDM3NTg5ZjM4NjViMmFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-r5oi62CVbhXf7lp379gVnQ2eh8CG4vQxmebxn4tXxQ";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
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
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}${path}${query}`, {
        method: "GET",
        headers: headers,
      });
      const responseJson = await res.json();

      setData(responseJson);

      return responseJson;
    } catch (error) {
      setIsError(true);
      console.error("useFetch error:", error);
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
