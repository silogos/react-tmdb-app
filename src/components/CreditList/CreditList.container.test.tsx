import { describe, it, expect, vi } from "vitest";
import CreditList from "./CreditList.container";
import { render } from "@testing-library/react";
import { dummyCredits } from "@/constants/dummyData";

vi.mock("./CreditList.component");

describe("CreditList Component", () => {
  it("renders correctly", () => {
    const component = render(
      <CreditList title="Test Title" credits={dummyCredits} />
    );

    expect(component.getAllByTestId("CreditItem")).toHaveLength(2);
    expect(component.container).toMatchSnapshot();
  });

  it("displays the no data when credits in empty", () => {
    const component = render(<CreditList title="Test Title" credits={[]} />);

    expect(component.getByTestId("ListNoData")).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });
});
