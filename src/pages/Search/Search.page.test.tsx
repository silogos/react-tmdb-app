import { describe, it, expect, vi, Mock } from "vitest";
import SearchPage from "./Search.page";
import { render } from "@testing-library/react";
import { BrowserRouter, useSearchParams } from "react-router";
import userEvent from "@testing-library/user-event";
import useMovies from "@/hooks/useMovies";
import { dummyMovies } from "@/constants/dummyData";

vi.mock("react-router", async () => {
  const originalModule = await vi.importActual("react-router");

  return {
    ...originalModule,
    useSearchParams: vi.fn().mockReturnValue([new URLSearchParams(), vi.fn()]),
  };
});
vi.mock("@/hooks/useMovies");
vi.mock("@/components/MovieList");
vi.mock("./Search.component");

describe("Search Page", () => {
  it("renders correctly", () => {
    (useMovies as Mock).mockReturnValueOnce({
      data: dummyMovies,
      isLoading: false,
      isError: false,
      fetchData: vi.fn(),
      fetchNextData: vi.fn(),
      searchText: "dynamic mock",
      setSearchText: vi.fn(),
    });

    const component = render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    expect(component.container).toMatchSnapshot();
  });

  it("should handleSearch correctly", async () => {
    const user = userEvent.setup();
    const mockUseSearchParams = vi.fn();
    const mockSetSearchText = vi.fn();
    (useSearchParams as Mock).mockReturnValue([
      new URLSearchParams(),
      mockUseSearchParams,
    ]);
    (useMovies as Mock).mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: false,
      fetchData: vi.fn(),
      fetchNextData: vi.fn(),
      searchText: "dynamic mock",
      setSearchText: mockSetSearchText,
    });

    const { getByTestId } = render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const inputSearch = getByTestId(
      "search-input"
    ) as unknown as HTMLInputElement;

    expect(inputSearch).toBeInTheDocument();

    inputSearch.focus();
    expect(inputSearch).toHaveFocus();

    await user.keyboard("hello{Enter}");

    expect(mockSetSearchText).toHaveBeenCalledWith("hello");
    expect(mockUseSearchParams).toHaveBeenCalledWith(
      new URLSearchParams({ query: "hello" })
    );
  });
});
