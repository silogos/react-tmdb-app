import { describe, it, expect } from "vitest";
import HomePage from "./Home.page";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  it("renders correctly", () => {
    const component = render(<HomePage />);
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(<HomePage />);
    expect(component).toMatchSnapshot();
  });
});
