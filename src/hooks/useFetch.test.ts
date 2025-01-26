import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it, vi } from "vitest";
import useFetch from "./useFetch";
import { waitFor } from "@testing-library/react";

describe("useFetch", () => {
  const fetch = vi.fn();
  vi.stubGlobal("fetch", fetch);

  it("should work when fetch is ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => true,
    });
    const { result } = renderHook(() => useFetch({}));
    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.data).toEqual(true);
    });

    expect(result.current.isLoading).toBe(false);
  });

  it("should isError true when fetch is not ok", async () => {
    fetch.mockRejectedValueOnce({
      ok: false,
      json: async () => true,
    });
    const { result } = renderHook(() => useFetch({}));
    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isError).toEqual(true);
    });

    expect(result.current.isLoading).toBe(false);
  });
});
