import { describe, it, expect, vitest } from "vitest";
import MovieList, {
  ListEmpty,
  ListLoading,
  MovieCardShimmenring,
} from "./MovieList.component";
import { fireEvent, render } from "@testing-library/react";

describe("MovieList Component", () => {
  it("renders correctly", () => {
    const component = render(
      <MovieList
        movies={[]}
        isLoading={false}
        isError={false}
        hasMoreData={false}
        onLoadMore={() => {}}
      />
    );
    expect(component).toBeTruthy();
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
    expect(component).toBeTruthy();
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
    expect(component).toBeTruthy();
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

describe("ListEmpty Component", () => {
  it("renders correctly when isEmpty true", () => {
    const component = render(<ListEmpty isEmpty={true} isError={false} />);
    expect(component).toBeTruthy();
  });

  it("renders correctly when isError true", () => {
    const component = render(<ListEmpty isEmpty={false} isError={true} />);
    expect(component).toBeTruthy();
  });

  it("renders correctly when both of them true", () => {
    const component = render(<ListEmpty isEmpty={true} isError={true} />);
    expect(component).toBeTruthy();
    expect(component.queryByText(/Data Not Found/i)).not.toBeInTheDocument();
    expect(component.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
});

describe("ListLoading Component", () => {
  it("renders correctly when isEmpty true", () => {
    const component = render(<ListLoading />);
    expect(component).toBeTruthy();
  });
});

describe("MovieCardShimmenring Component", () => {
  it("renders correctly when isEmpty true", () => {
    const component = render(<MovieCardShimmenring />);
    expect(component).toBeTruthy();
  });
});
