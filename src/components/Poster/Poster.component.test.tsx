import { describe, it, expect } from "vitest";
import Poster from "./Poster.component";
import { render } from "@testing-library/react";

describe("BackDrop Component", () => {
  it("renders correctly", () => {
    const backdrop = render(<Poster poster="testPath" />);
    expect(backdrop).toBeTruthy();
  });

  it("displays the correct image source", () => {
    const { getByAltText } = render(<Poster poster="testPath" />);
    const imgElement = getByAltText("Movie Poster") as HTMLImageElement;
    expect(imgElement.src).toContain(
      "https://image.tmdb.org/t/p/w300/testPath"
    );
  });
});
