import { describe, it, expect, vitest } from "vitest";
import MovieList, {
  ListEmpty,
  ListLoading,
  MovieCardShimmenring,
} from "./MovieList.component";
import { fireEvent, render } from "@testing-library/react";
import { Movie } from "@/types/Movie.types";
import { BrowserRouter } from "react-router";

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

  it("renders correctly with data", () => {
    const dummyData: Movie[] = [
      {
        adult: false,
        backdrop_path: "/rDa3SfEijeRNCWtHQZCwfbGxYvR.jpg",
        genre_ids: [28, 878, 12, 14, 53],
        id: 539972,
        original_language: "en",
        original_title: "Kraven the Hunter",
        overview:
          "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
        popularity: 4706.901,
        poster_path: "/i47IUSsN126K11JUzqQIOi1Mg1M.jpg",
        release_date: "2024-12-11",
        title: "Kraven the Hunter",
        video: false,
        vote_average: 6.562,
        vote_count: 707,
      },
    ];

    const component = render(
      <BrowserRouter>
        <MovieList
          movies={dummyData}
          isLoading={false}
          isError={false}
          hasMoreData={false}
          onLoadMore={() => {}}
        />
      </BrowserRouter>
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
