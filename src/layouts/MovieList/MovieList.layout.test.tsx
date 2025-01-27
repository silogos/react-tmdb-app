import { describe, it, expect, vi } from "vitest";
import MovieList from "./MovieList.layout";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

vi.mock("react-router", async () => {
  const originalModule = await vi.importActual("react-router");

  return {
    ...originalModule,
    Outlet: () => <div data-testid="Outlet" />,
  };
});
vi.mock("./MovieList.component");

describe("MovieList Layout", () => {
  it("renders correctly", () => {
    const component = render(
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    );
    expect(component.container).toMatchSnapshot();
  });
});
