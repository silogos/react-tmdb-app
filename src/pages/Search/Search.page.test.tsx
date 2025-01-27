import { describe, it, expect, vi, Mock } from "vitest";
import SearchPage from "./Search.page";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import useMovies from "@/hooks/useMovies";
import { dummyMovies } from "@/constants/dummyData";

vi.mock("@/hooks/useMovies");
vi.mock("@/components/MovieList");
vi.mock("./Search.component");

describe("Search Page", () => {
  it("renders correctly", () => {
    (useMovies as Mock).mockReturnValueOnce({
      data: dummyMovies,
      isLoading: false,
      isError: false,
      fetchData: () => {},
      fetchNextData: () => {},
      searchText: "dynamic mock",
      setSearchText: () => {},
    });

    const component = render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    expect(component.container).toMatchSnapshot();
  });
});
