import { describe, it, expect, vi } from "vitest";
import { ListLoading, ListError, ListEmpty } from "./MovieList.component";
import { render } from "@testing-library/react";

vi.mock("@/components/MovieCard/MovieCard.component.tsx");

describe("MovieList.component", () => {
  it("renders ListLoading correctly", () => {
    const component = render(<ListLoading />);

    expect(component.container).toMatchSnapshot();
  });

  it("renders ListError correctly", () => {
    const component = render(<ListError />);

    expect(component.container).toMatchSnapshot();
  });

  it("renders ListEmpty correctly", () => {
    const component = render(<ListEmpty />);

    expect(component.container).toMatchSnapshot();
  });
});
