import { describe, it, expect } from "vitest";
import Banner from "./Banner.component";
import { render } from "@testing-library/react";

describe("Banner Component", () => {
  it("renders correctly", () => {
    const component = render(<Banner src="testPath" />);

    expect(component.container).toMatchSnapshot();
  });

  it("displays the correct image source", () => {
    const { container, getByAltText } = render(<Banner src="testPath" />);
    const imgElement = getByAltText("Movie Banner") as HTMLImageElement;

    expect(imgElement.src).toContain(
      "https://image.tmdb.org/t/p/w500/testPath"
    );
    expect(container).toMatchSnapshot();
  });

  it("displays Image Not Found when src is null", () => {
    const { container, getByText } = render(<Banner />);

    expect(getByText("Image Not Found")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
