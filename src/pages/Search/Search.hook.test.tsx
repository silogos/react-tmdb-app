import { describe, expect, it, Mock, vi } from "vitest";
import useSearchPage from "./Search.hook";
import { act, renderHook } from "@testing-library/react-hooks";
import { useSearchParams } from "react-router";
import useMovies from "@/hooks/useMovies";

vi.mock("react-router", async () => {
  const originalModule = await vi.importActual("react-router");

  return {
    ...originalModule,
    useSearchParams: vi.fn().mockReturnValue([new URLSearchParams(), vi.fn()]),
  };
});
vi.mock("@/hooks/useMovies");

describe("useMovieListLayout", () => {
  it("should work correctly", async () => {
    const mockUseSearchParams = vi.fn();
    const mockSetSearchText = vi.fn();
    (useSearchParams as Mock).mockReturnValue([
      new URLSearchParams(),
      mockUseSearchParams,
    ]);
    (useMovies as Mock).mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: false,
      fetchData: vi.fn(),
      fetchNextData: vi.fn(),
      searchText: "dynamic mock",
      setSearchText: mockSetSearchText,
    });

    const { result } = renderHook(() => useSearchPage());

    act(() => {
      result.current.handleSearch("test");
    });

    expect(mockSetSearchText).toHaveBeenCalledWith("test");
    expect(mockUseSearchParams).toHaveBeenCalledWith(
      new URLSearchParams({ query: "test" })
    );
  });
});
