import { describe, it, expect } from "vitest";
import MovieList from "./MovieList.layout";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("MovieList Page", () => {
  it("renders correctly", () => {
    const component = render(
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    );
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
