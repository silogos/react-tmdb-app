import { describe, expect, it, vi } from "vitest";
import { loadImage, wait } from "./Common.utils";

describe("Common.utils", () => {
  describe("loadImage", () => {
    it("resolves when image loads successfully", async () => {
      const Image = vi.fn(() => ({
        set src(_: string) {
          setTimeout(() => {
            this.onload();
          }, 100);
        },
        onload: vi.fn(),
        onerror: vi.fn(),
      }));
      vi.stubGlobal("Image", Image);
      await expect(loadImage("test")).resolves.toBe(true);
      expect(Image).toHaveBeenCalledOnce();

      vi.unstubAllGlobals();
    });

    it("rejects when image fails to load", async () => {
      const Image = vi.fn(() => ({
        set src(_: string) {
          setTimeout(() => {
            this.onerror();
          }, 100);
        },
        onload: vi.fn(),
        onerror: vi.fn(),
      }));
      vi.stubGlobal("Image", Image);
      await expect(loadImage("test")).rejects.toThrow();

      expect(Image).toHaveBeenCalledOnce();

      vi.unstubAllGlobals();
    });
  });

  describe("wait", () => {
    it("resolves", async () => {
      await expect(wait(100)).resolves.toBeUndefined();
    });
  });
});
