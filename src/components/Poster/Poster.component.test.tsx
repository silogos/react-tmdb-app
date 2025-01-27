import { describe, it, expect } from "vitest";
import Poster from "./Poster.component";
import { render } from "@testing-library/react";

describe("Poster Component", () => {
  it("renders correctly", () => {
    const component = render(<Poster poster="testPath" />);

    expect(component.container).toMatchSnapshot();
  });

  it("renders correctly without poster image", () => {
    const component = render(<Poster />);

    expect(component.container).toMatchSnapshot();
  });

  it("displays the correct image source", () => {
    const { getByAltText } = render(<Poster poster="testPath" />);
    const imgElement = getByAltText("Movie Poster") as HTMLImageElement;
    expect(imgElement.src).toBe("https://image.tmdb.org/t/p/w300/testPath");
  });
});
