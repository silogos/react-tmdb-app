import { describe, it, expect, vi } from "vitest";
import SearchInput from "./SearchInput.component";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SearchInput Component", () => {
  it("renders correctly", () => {
    const component = render(<SearchInput onSubmit={() => {}} />);
    expect(component).toBeTruthy();
  });

  it("displays the correct image source", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    const { getByTestId } = render(<SearchInput onSubmit={handleSubmit} />);
    const inputSearch = getByTestId(
      "search-input"
    ) as unknown as HTMLInputElement;

    expect(inputSearch).toBeInTheDocument();

    inputSearch.focus();
    expect(inputSearch).toHaveFocus();

    await user.keyboard("hello{Enter}");

    expect(handleSubmit).toHaveBeenCalledExactlyOnceWith("hello");
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
