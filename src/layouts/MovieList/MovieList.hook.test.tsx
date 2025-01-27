import { describe, expect, it, Mock, vi } from "vitest";
import useMovieListLayout from "./MovieList.hook";
import { act, renderHook } from "@testing-library/react-hooks";
import { useNavigate } from "react-router";

vi.mock("react-router", async () => {
  const originalModule = await vi.importActual("react-router");

  return {
    ...originalModule,
    useNavigate: vi.fn(),
  };
});

describe("useMovieListLayout", () => {
  it("should work correctly", async () => {
    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => useMovieListLayout());

    act(() => {
      result.current.handleSearch("test");
    });

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(`/movies/search?query=test`);
  });
});
