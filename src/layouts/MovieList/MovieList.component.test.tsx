import { describe, it, expect } from "vitest";
import { Hero } from "./MovieList.component";
import { render } from "@testing-library/react";

describe("MovieList Layout Component", () => {
  it("renders correctly", () => {
    const component = render(<Hero />);

    expect(component.container).toMatchSnapshot();
  });
});
