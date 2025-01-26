import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import MovieCard from "./MovieCard.component";
import { MovieCardProps } from "./MovieCard.type";

describe("MovieCard", () => {
  const movie: MovieCardProps = {
    id: 1,
    title: "Inception",
    releaseDate: "2010-07-16",
    poster: "inception.jpg",
    voteAverage: 1,
  };

  it("renders correctly", () => {
    const { getByAltText, getAllByText } = render(
      <BrowserRouter>
        <MovieCard {...movie} />
      </BrowserRouter>
    );

    expect(getAllByText(/Inception/)).toHaveLength(2);
    expect(getAllByText("2010")).toHaveLength(2);
    expect(getByAltText("Movie Poster")).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/inception.jpg"
    );
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

  it("applies hover effects correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <MovieCard {...movie} />
      </BrowserRouter>
    );

    const img = container.querySelector("img");
    expect(img).toHaveClass("group-hover:lg:scale-110");

    const overlay = container.querySelector("div.hidden.lg\\:flex");
    expect(overlay).toHaveClass("group-hover:opacity-100");

    const textOverlay = container.querySelector(
      "div.hidden.lg\\:flex.absolute.bottom-0"
    );
    expect(textOverlay).toHaveClass("group-hover:opacity-100");
  });
});
