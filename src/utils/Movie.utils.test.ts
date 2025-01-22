import { describe, expect, it } from "vitest";
import {
  getReleaseYear,
  formatReleaseDate,
  formatRunTime,
  getRatingText,
} from "./Movie.utils";

describe("Movie Utils", () => {
  it("getReleaseYear", () => {
    expect(getReleaseYear("2024-12-12")).toBe(2024);
  });

  it("formatReleaseDate", () => {
    expect(formatReleaseDate("2024-08-12")).toBe("08/12/2024");
  });

  it("getReleaseYear", () => {
    expect(formatRunTime(124)).toBe("2h 4m");
  });

  it("getReleaseYear", () => {
    expect(getRatingText(6.5)).toBe("6.5/10");
  });
});
