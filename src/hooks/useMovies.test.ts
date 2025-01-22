import { renderHook, act } from "@testing-library/react-hooks";
import { describe, expect, it, Mock, vi } from "vitest";
import useMovies from "./useMovies";
import useFetch from "./useFetch";
import { Movie } from "@/types/Movie.types";

vi.mock("./useFetch");

const dummyData: Movie[] = [
  {
    adult: false,
    backdrop_path: "/rDa3SfEijeRNCWtHQZCwfbGxYvR.jpg",
    genre_ids: [28, 878, 12, 14, 53],
    id: 539972,
    original_language: "en",
    original_title: "Kraven the Hunter",
    overview:
      "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
    popularity: 4706.901,
    poster_path: "/i47IUSsN126K11JUzqQIOi1Mg1M.jpg",
    release_date: "2024-12-11",
    title: "Kraven the Hunter",
    video: false,
    vote_average: 6.562,
    vote_count: 707,
  },
];

describe("useMovies", () => {
  it("returns movies when data is fetched successfully", async () => {
    (useFetch as Mock).mockReturnValue({
      getData: vi.fn().mockResolvedValue({
        page: 1,
        total_pages: 1,
        results: dummyData,
      }),
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useMovies({ path: "/movies" })
    );

    await waitForNextUpdate();

    expect(result.current.data).toEqual(dummyData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("handles errors when fetching data", async () => {
    (useFetch as Mock).mockReturnValue({
      getData: vi.fn().mockRejectedValue(new Error("Failed to fetch")),
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useMovies({ path: "/movies" })
    );

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
  });

  it("fetches next page of data", async () => {
    (useFetch as Mock).mockReturnValue({
      getData: vi.fn().mockResolvedValue({
        page: 1,
        total_pages: 2,
        results: dummyData,
      }),
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useMovies({ path: "/movies" })
    );

    await waitForNextUpdate();

    expect(result.current.data).toEqual(dummyData);
    expect(result.current.hasMoreData).toBe(true);

    (useFetch as Mock).mockReturnValue({
      getData: vi.fn().mockResolvedValue({
        page: 2,
        total_pages: 2,
        results: dummyData,
      }),
    });

    act(() => {
      result.current.fetchNextData();
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual([...dummyData, ...dummyData]);
    expect(result.current.hasMoreData).toBe(false);
  });
});
