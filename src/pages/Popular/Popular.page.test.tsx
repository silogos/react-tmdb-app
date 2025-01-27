import { describe, it, expect, Mock, vi } from "vitest";
import Popular from "./Popular.page";
import { render } from "@testing-library/react";
import useMovies from "@/hooks/useMovies";
import { BrowserRouter } from "react-router";
import { dummyMovies } from "@/constants/dummyData";

vi.mock("@/hooks/useMovies");
vi.mock("@/components/MovieList");

describe("Popular Page", () => {
  it("renders correctly", () => {
    (useMovies as Mock).mockReturnValue({
      data: dummyMovies,
      isLoading: false,
      isError: false,
    });
    const component = render(
      <BrowserRouter>
        <Popular />
      </BrowserRouter>
    );

    expect(component.container).toMatchSnapshot();
  });
});
