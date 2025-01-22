import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it, Mock, vi } from "vitest";
import useCredits from "./useCredits";
import useFetch from "./useFetch";

vi.mock("./useFetch");

describe("useCredits", () => {
  it("returns casts and crews when data is fetched successfully", () => {
    const mockData = {
      id: 1,
      cast: [{ id: 1, name: "Actor 1" }],
      crew: [{ id: 2, name: "Crew 1" }],
    };
    (useFetch as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useCredits());

    expect(result.current.casts).toEqual(mockData.cast);
    expect(result.current.crews).toEqual(mockData.crew);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("returns empty arrays when data is not available", () => {
    (useFetch as Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useCredits());

    expect(result.current.casts).toEqual([]);
    expect(result.current.crews).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("handles loading state correctly", () => {
    (useFetch as Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    const { result } = renderHook(() => useCredits());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
  });

  it("handles error state correctly", () => {
    (useFetch as Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    const { result } = renderHook(() => useCredits());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
  });

  it("returns correct data when cast and crew are empty arrays", () => {
    const mockData = {
      id: 1,
      cast: [],
      crew: [],
    };
    (useFetch as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useCredits());

    expect(result.current.casts).toEqual([]);
    expect(result.current.crews).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("returns correct data when only cast is available", () => {
    const mockData = {
      id: 1,
      cast: [{ id: 1, name: "Actor 1" }],
      crew: [],
    };
    (useFetch as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useCredits());

    expect(result.current.casts).toEqual(mockData.cast);
    expect(result.current.crews).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("returns correct data when only crew is available", () => {
    const mockData = {
      id: 1,
      cast: [],
      crew: [{ id: 2, name: "Crew 1" }],
    };
    (useFetch as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useCredits());

    expect(result.current.casts).toEqual([]);
    expect(result.current.crews).toEqual(mockData.crew);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });
});
