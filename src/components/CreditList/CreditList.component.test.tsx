import { describe, it, expect } from "vitest";
import { ListNoData, CreditItem } from "./CreditList.component";
import { render } from "@testing-library/react";
import { Credit } from "@/types/Movie.types";
import { dummyCredit } from "@/constants/dummyData";

describe("CreditList Component", () => {
  it("renders ListNoData correctly", () => {
    const component = render(<ListNoData />);

    expect(component.container).toMatchSnapshot();
  });

  describe("CreditItem", () => {
    it("renders correctly", () => {
      const component = render(<CreditItem credit={dummyCredit} />);

      expect(component.getByText("Aaron Taylor-Johnson")).toBeInTheDocument();
      expect(
        component.getByText("Sergei Kravinoff / Kraven the Hunter")
      ).toBeInTheDocument();
      expect(component.container).toMatchSnapshot();
    });

    it("displays subtitle use known_for_department when character in null", () => {
      const _dummyCredit: Credit = {
        ...dummyCredit,
        character: undefined,
      };
      const component = render(<CreditItem credit={_dummyCredit} />);

      expect(component.getByText("Acting")).toBeInTheDocument();
      expect(component.container).toMatchSnapshot();
    });

    it("displays the UserIcon when profile_path in null", () => {
      const _dummyCredit: Credit = {
        ...dummyCredit,
        profile_path: undefined,
      };
      const component = render(<CreditItem credit={_dummyCredit} />);

      expect(component.getByTestId("user-profile")).toBeInTheDocument();
      expect(component.container).toMatchSnapshot();
    });
  });
});
