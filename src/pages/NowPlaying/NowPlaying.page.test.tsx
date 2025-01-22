import { describe, it, expect } from "vitest";
import NowPlaying from "./NowPlaying.page";
import { render } from "@testing-library/react";

describe("NowPlaying Page", () => {
  it("renders correctly", () => {
    const component = render(<NowPlaying />);
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(<NowPlaying />);
    expect(component).toMatchSnapshot();
  });
});
