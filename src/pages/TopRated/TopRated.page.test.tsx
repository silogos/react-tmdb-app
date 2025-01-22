import { describe, it, expect } from "vitest";
import TopRated from "./TopRated.page";
import { render } from "@testing-library/react";

describe("TopRated Page", () => {
  it("renders correctly", () => {
    const component = render(<TopRated />);
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(<TopRated />);
    expect(component).toMatchSnapshot();
  });
});
