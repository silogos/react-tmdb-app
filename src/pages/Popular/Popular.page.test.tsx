import { describe, it, expect } from "vitest";
import Popular from "./Popular.page";
import { render } from "@testing-library/react";

describe("Popular Page", () => {
  it("renders correctly", () => {
    const component = render(<Popular />);
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(<Popular />);
    expect(component).toMatchSnapshot();
  });
});
