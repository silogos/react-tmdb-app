import { describe, it, expect } from "vitest";
import SearchPage from "./Search.page";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("Search Page", () => {
  it("renders correctly", () => {
    const component = render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );
    expect(component).toBeTruthy();
  });

  it("renders toMatchSnapshot", () => {
    const component = render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
