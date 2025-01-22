import { renderHook } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import useBackgroundImage from "./useBackgroundImage";

describe("useBackgroundImage", () => {
  it("should remove overlay opacity class on cleanup", () => {
    const mockOverlay = document.createElement("div");
    mockOverlay.id = "backdrop-overlay";
    document.body.appendChild(mockOverlay);

    const imagePath = "test-image.jpg";
    const { unmount } = renderHook(() => useBackgroundImage(imagePath));

    unmount();

    console.log(document);
    expect(mockOverlay.classList.contains("opacity-0")).toBe(false);

    document.body.removeChild(mockOverlay);
  });

  it("should do nothing if imagePath is undefined", () => {
    const setBackgroundImageSpy = vi.spyOn(
      document.body.style,
      "backgroundImage",
      "set"
    );

    renderHook(() => useBackgroundImage(undefined));

    expect(setBackgroundImageSpy).not.toHaveBeenCalled();

    setBackgroundImageSpy.mockRestore();
  });
});
