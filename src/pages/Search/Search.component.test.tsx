import { describe, it, expect, vi } from "vitest";
import { Header, Search } from "./Search.component";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

vi.mock("@/components/SearchInput");

describe("Search Page Component", () => {
  it("renders Header correctly", () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(component.container).toMatchSnapshot();
  });
  it("renders Search correctly", () => {
    const component = render(<Search queryValue="" handleSearch={() => {}} />);

    expect(component.container).toMatchSnapshot();
  });
});
