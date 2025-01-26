import { describe, it, expect, vi, Mock } from "vitest";
import MovieList from "./MovieList.layout";
import { render } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router";
import userEvent from "@testing-library/user-event";

vi.mock("react-router", async () => {
  const originalModule = await vi.importActual("react-router");

  return {
    ...originalModule,
    useNavigate: vi.fn(),
  };
});

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

  it("search", async () => {
    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    const user = userEvent.setup();
    const { getByTestId } = render(
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    );

    const inputSearch = getByTestId(
      "search-input"
    ) as unknown as HTMLInputElement;

    expect(inputSearch).toBeInTheDocument();

    inputSearch.focus();
    expect(inputSearch).toHaveFocus();

    await user.keyboard("hello{Enter}");

    expect(mockNavigate).toHaveBeenCalledWith(`/movies/search?query=hello`);
  });
});
