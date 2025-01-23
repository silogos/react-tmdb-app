import { describe, it, expect, vitest } from "vitest";
import SearchInput from "./SearchInput.component";
import { fireEvent, render } from "@testing-library/react";

describe("SearchInput Component", () => {
  it("renders correctly", () => {
    const component = render(<SearchInput onSubmit={() => {}} />);
    expect(component).toBeTruthy();
  });

  it("displays the correct image source", () => {
    const handleSubmit = vitest.fn();
    const { getByTestId } = render(<SearchInput onSubmit={handleSubmit} />);
    const inputSearch = getByTestId(
      "search-input"
    ) as unknown as HTMLInputElement;

    expect(inputSearch).toBeInTheDocument();

    fireEvent.change(inputSearch, { target: { value: "test" } });
    expect(inputSearch.value).toBe("test");

    // fireEvent.submit(inputSearch.closest("form")!);

    // expect(handleSubmit).toHaveBeenCalled();
  });
});
