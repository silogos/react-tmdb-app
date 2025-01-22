import { describe, it, expect } from "vitest";
import Upcoming from "./Upcoming.page";
import { render } from "@testing-library/react";

describe("Upcoming Page", () => {
  it("renders correctly", () => {
    const component = render(<Upcoming />);
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(<Upcoming />);
    expect(component).toMatchSnapshot();
  });
});
