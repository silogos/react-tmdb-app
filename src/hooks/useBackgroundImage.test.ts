import { renderHook } from "@testing-library/react";
import { vi, describe, it, expect, vitest } from "vitest";
import useBackgroundImage from "./useBackgroundImage";

describe("useBackgroundImage", () => {
  it("should remove overlay opacity class on cleanup", () => {
    // Mock elemen backdrop-overlay
    const mockOverlay = document.createElement("div");
    mockOverlay.id = "backdrop-overlay";
    document.body.appendChild(mockOverlay);

    // Render hook dengan imagePath
    const imagePath = "test-image.jpg";
    const { unmount } = renderHook(() => useBackgroundImage(imagePath));

    // Simulasikan unmount
    unmount();

    // Verifikasi class overlay dihapus
    console.log(document);
    expect(mockOverlay.classList.contains("opacity-0")).toBe(false);

    // Bersihkan elemen
    document.body.removeChild(mockOverlay);
  });

  it("should do nothing if imagePath is undefined", () => {
    // Spy pada style.body.backgroundImage
    const setBackgroundImageSpy = vi.spyOn(
      document.body.style,
      "backgroundImage",
      "set"
    );

    // Render hook tanpa imagePath
    renderHook(() => useBackgroundImage(undefined));

    // Verifikasi tidak ada perubahan pada background image
    expect(setBackgroundImageSpy).not.toHaveBeenCalled();

    setBackgroundImageSpy.mockRestore();
  });
});
