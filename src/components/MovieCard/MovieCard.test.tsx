import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import MovieCard from "./MovieCard.component";
import { MovieCardProps } from "./MovieCard.type";

vi.mock("@/components/Poster");

describe("MovieCard Component", () => {
  const movie: MovieCardProps = {
    id: 1,
    title: "Inception",
    releaseDate: "2010-07-16",
    poster: "inception.jpg",
    voteAverage: 1,
  };

  it("renders correctly", () => {
    const { container, getAllByText } = render(
      <BrowserRouter>
        <MovieCard {...movie} />
      </BrowserRouter>
    );

    expect(getAllByText(/Inception/)).toHaveLength(2);
    expect(getAllByText("2010")).toHaveLength(2);
    expect(container).toMatchSnapshot();
  });

  it("has correct link", () => {
    const { container } = render(
      <BrowserRouter>
        <MovieCard {...movie} />
      </BrowserRouter>
    );

    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/movie/1");
  });
});
