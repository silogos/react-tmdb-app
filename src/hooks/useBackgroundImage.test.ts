import { vi, describe, it, expect } from "vitest";
import useBackgroundImage from "./useBackgroundImage";
import { renderHook, waitFor } from "@testing-library/react";

vi.mock("@/utils/Common.utils");

describe("useBackgroundImage", () => {
  describe("Test without image", () => {
    const mockRemoveClassList = {
      add: vi.fn(),
      remove: vi.fn(),
    };
    const mockElement = {
      classList: mockRemoveClassList,
    };
    vi.spyOn(document, "getElementById").mockReturnValue(
      mockElement as unknown as HTMLElement
    );
    const mockSetBackgroundImage = vi.spyOn(
      document.body.style,
      "backgroundImage",
      "set"
    );

    it("shouldn't add class opacity-80 to backdrop-overlay and set backgroundImage when mounted", async () => {
      renderHook(() => useBackgroundImage());
      await waitFor(() => {
        expect(mockSetBackgroundImage).not.toHaveBeenCalled();
        expect(mockRemoveClassList.add).not.toHaveBeenCalledWith("opacity-80");
      });
    });

    it("should remove class opacity-80 to backdrop-overlay when unmounted", async () => {
      const { unmount } = renderHook(() => useBackgroundImage());
      unmount();
      await waitFor(() => {
        expect(mockRemoveClassList.remove).not.toHaveBeenCalledWith(
          "opacity-80"
        );
      });
    });
  });

  describe("Test with image", () => {
    const mockRemoveClassList = {
      add: vi.fn(),
      remove: vi.fn(),
    };
    const mockElement = {
      classList: mockRemoveClassList,
    };
    vi.spyOn(document, "getElementById").mockReturnValue(
      mockElement as unknown as HTMLElement
    );
    const mockSetBackgroundImage = vi.spyOn(
      document.body.style,
      "backgroundImage",
      "set"
    );

    it("mount", async () => {
      renderHook(() => useBackgroundImage("test.jpg"));
      await waitFor(() => {
        expect(mockSetBackgroundImage).toHaveBeenCalledWith(
          `url('https://image.tmdb.org/t/p/w300/test.jpg')`
        );
        expect(mockRemoveClassList.add).toHaveBeenCalledWith("opacity-80");
      });
    });

    it("should remove class opacity-80 to backdrop-overlay when unmounted", async () => {
      const { unmount } = renderHook(() => useBackgroundImage("test.jpg"));
      unmount();
      await waitFor(() => {
        expect(mockRemoveClassList.remove).toHaveBeenCalledWith("opacity-80");
      });
    });
  });
});
