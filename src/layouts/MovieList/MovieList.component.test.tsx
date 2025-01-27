import { describe, it, expect, vi } from "vitest";
import { Hero, Filter } from "./MovieList.component";
import { render } from "@testing-library/react";

vi.mock("@/components/FilterButton");
vi.mock("@/components/SearchInput");

describe("MovieList Layout Component", () => {
  it("renders Hero correctly", () => {
    const component = render(<Hero />);

    expect(component.container).toMatchSnapshot();
  });

  it("renders Filter correctly", () => {
    const component = render(
      <Filter
        categoryList={[
          { filterId: "1", title: "test title" },
          { filterId: "2", title: "test title" },
        ]}
        handleSearch={() => {}}
      />
    );

    expect(component.getAllByTestId("FilterButton")).toHaveLength(2);
    expect(component.getByTestId("SearchInput")).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });
});
