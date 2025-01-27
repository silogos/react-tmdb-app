import { describe, it, expect } from "vitest";
import PageLayout from "./Page.layout";
import { render } from "@testing-library/react";

describe("Page Layout", () => {
  it("renders correctly", () => {
    const component = render(<PageLayout />);

    expect(component.container).toMatchSnapshot();
  });
});
