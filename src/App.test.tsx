import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "App";

describe("App", () => {
  it("should mount correctly", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
