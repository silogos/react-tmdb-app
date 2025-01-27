import { vi, describe, it, expect } from "vitest";
import useTitle from "./useTitle";
import { renderHook, waitFor } from "@testing-library/react";

describe("useTitle", () => {
  it("should render correctly", async () => {
    const mockSetTitle = vi.spyOn(document, "title", "set");

    renderHook(() => useTitle("Test Title"));

    await waitFor(() => {
      expect(mockSetTitle).toHaveBeenCalled();
      expect(mockSetTitle).toHaveBeenCalledWith("Test Title");
    });
  });
});
