import { describe, it, expect } from "vitest";
import Poster from "./Poster.component";
import { render } from "@testing-library/react";

describe("Poster Component", () => {
  it("renders correctly", () => {
    const component = render(<Poster poster="testPath" />);
    expect(component).toBeTruthy();
  });

  it("displays the correct image source", () => {
    const { getByAltText } = render(<Poster poster="testPath" />);
    const imgElement = getByAltText("Movie Poster") as HTMLImageElement;
    expect(imgElement.src).toContain(
      "https://image.tmdb.org/t/p/w300/testPath"
    );
  });
});
