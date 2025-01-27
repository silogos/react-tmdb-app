import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import FilterButton from "./FilterButton.component";
import { createRoutesStub } from "react-router";

describe("FilterButton Component", () => {
  const RouterStub = createRoutesStub([
    {
      path: "/popular",
      Component: () => (
        <FilterButton filterId="/popular" title="Popular Filter" />
      ),
    },
    {
      path: "/upcoming",
      Component: () => (
        <FilterButton filterId="/popular" title="Popular Filter" />
      ),
    },
  ]);

  it("displays the correct bg when active", () => {
    const component = render(<RouterStub initialEntries={["/popular"]} />);

    expect(component.getByText(/Popular Filter/)).toHaveClass("bg-gray-50");
    expect(component.container).toMatchSnapshot();
  });

  it("displays the correct bg when inactive", () => {
    const component = render(<RouterStub initialEntries={["/upcoming"]} />);

    expect(component.getByText(/Popular Filter/)).toHaveClass("bg-gray-400");
    expect(component.container).toMatchSnapshot();
  });
});
