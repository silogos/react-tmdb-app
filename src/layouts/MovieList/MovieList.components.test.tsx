import { describe, it, expect } from "vitest";
import { MovieListHero } from "./MovieList.components";
import { render } from "@testing-library/react";

describe("MovieList Page", () => {
  it("renders correctly", () => {
    const component = render(<MovieListHero />);
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(<MovieListHero />);
    expect(component).toMatchSnapshot();
  });
});
