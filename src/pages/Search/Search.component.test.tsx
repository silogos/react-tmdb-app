import { describe, it, expect } from "vitest";
import { Header } from "./Search.component";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("Search Page Component", () => {
  it("renders Header correctly", () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(component.container).toMatchSnapshot();
  });
});
