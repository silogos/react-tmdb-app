import { describe, it, expect, vitest } from "vitest";
import { DisplayNoData, DisplayError } from "./Displays.component";
import { fireEvent, render } from "@testing-library/react";

describe("Display Component", () => {
  it("renders DisplayNoData correctly", () => {
    const component = render(<DisplayNoData />);

    expect(component.getByText("Data Not Found")).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });

  describe("DisplayError", () => {
    it("renders correctly", () => {
      const component = render(<DisplayError onReload={() => {}} />);

      expect(component.getByText("Something went wrong")).toBeInTheDocument();
      expect(component.getByText("Reload")).toBeInTheDocument();
    });

    it("renders correctly when onReload undefined", () => {
      const component = render(<DisplayError />);

      expect(component.queryByText(/Reload/i)).not.toBeInTheDocument();
      expect(component.container).toMatchSnapshot();
    });

    it("renders correctly when onReload undefined", () => {
      const onReload = vitest.fn();
      const component = render(<DisplayError onReload={onReload} />);

      fireEvent.click(component.getByText(/Reload/i));

      expect(onReload).toHaveBeenCalledTimes(1);
      expect(component.container).toMatchSnapshot();
    });
  });
});
