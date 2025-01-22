import { describe, it, expect } from "vitest";
import MovieDetail from "./MovieDetail.page";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("MovieDetail Page", () => {
  it("renders correctly", () => {
    const component = render(
      <BrowserRouter>
        <MovieDetail />
      </BrowserRouter>
    );
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(
      <BrowserRouter>
        <MovieDetail />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
