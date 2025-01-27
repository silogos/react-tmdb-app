import { useNavigate } from "react-router";
import { useCallback } from "react";

function useMovieListLayout() {
  const navigate = useNavigate();
  const handleSearch = useCallback((searchText: string) => {
    navigate(`/movies/search?query=${searchText}`);
  }, []);

  return {
    handleSearch,
  };
}

export default useMovieListLayout;
