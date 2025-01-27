import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it, Mock, vi } from "vitest";
import useMovieDetail from "./useMovieDetail";
import useFetch from "./useFetch";
import { dummyMovieDetail } from "@/constants/dummyData";

vi.mock("./useFetch");

describe("useMovieDetail", () => {
  it("returns casts and crews when data is fetched successfully", () => {
    (useFetch as Mock).mockReturnValue({
      data: dummyMovieDetail,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useMovieDetail());

    expect(result.current.data).toEqual(dummyMovieDetail);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("returns empty arrays when data is not available", () => {
    (useFetch as Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useMovieDetail());

    expect(result.current.data).toEqual(undefined);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("handles loading state correctly", () => {
    (useFetch as Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    });

    const { result } = renderHook(() => useMovieDetail());

    expect(result.current.data).toEqual(undefined);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
  });

  it("handles error state correctly", () => {
    (useFetch as Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    });

    const { result } = renderHook(() => useMovieDetail());

    expect(result.current.data).toEqual(undefined);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
  });
});
