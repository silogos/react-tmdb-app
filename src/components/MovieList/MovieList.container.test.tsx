import { describe, it, expect, vitest, vi } from "vitest";
import MovieList from "./MovieList.container";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { dummyMovies } from "@/constants/dummyData";

vi.mock("@/components/MovieCard/MovieCard.component.tsx");
vi.mock("./MovieList.component");

describe("MovieList.component", () => {
  it("renders correctly with data", () => {
    const component = render(
      <BrowserRouter>
        <MovieList
          movies={dummyMovies}
          isLoading={false}
          isError={false}
          hasMoreData={false}
          onLoadMore={() => {}}
        />
      </BrowserRouter>
    );

    expect(component.getAllByTestId("MovieCard")).toHaveLength(2);
    expect(component.container).toMatchSnapshot();
  });

  it("renders correctly with nodata state", () => {
    const component = render(
      <MovieList
        movies={[]}
        isLoading={false}
        isError={false}
        hasMoreData={false}
        onLoadMore={() => {}}
      />
    );

    expect(component.getByTestId("ListEmpty")).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });

  it("renders correctly when isLoading true", () => {
    const component = render(
      <MovieList
        movies={[]}
        isLoading={true}
        isError={false}
        hasMoreData={false}
        onLoadMore={() => {}}
      />
    );

    expect(component.getByTestId("ListLoading")).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });

  it("renders correctly when isError true", () => {
    const component = render(
      <MovieList
        movies={[]}
        isLoading={false}
        isError={true}
        hasMoreData={false}
        onLoadMore={() => {}}
      />
    );

    expect(component.getByTestId("ListError")).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });

  it("renders correctly when hasMoreData true", () => {
    const component = render(
      <MovieList
        movies={[]}
        isLoading={false}
        isError={false}
        hasMoreData={true}
        onLoadMore={() => {}}
      />
    );

    expect(component.getByText("Load More")).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });

  it("renders correctly when hasMoreData true and click it", () => {
    const onLoadMore = vitest.fn();
    const component = render(
      <MovieList
        movies={[]}
        isLoading={false}
        isError={false}
        hasMoreData={true}
        onLoadMore={onLoadMore}
      />
    );
    expect(component).toBeTruthy();
    expect(component.getByText("Load More")).toBeInTheDocument();

    const loadMoreButton = component.getByRole("button");
    fireEvent.click(loadMoreButton);
    expect(onLoadMore).toHaveBeenCalledOnce();
  });
});
