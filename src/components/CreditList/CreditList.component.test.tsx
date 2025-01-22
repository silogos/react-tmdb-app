import { describe, it, expect } from "vitest";
import CreditList, { CreditItem } from "./CreditList.component";
import { render } from "@testing-library/react";
import { Credit } from "@/types/Movie.types";

describe("CreditList Component", () => {
  const dummyCredits: Credit[] = [
    {
      adult: false,
      gender: 2,
      id: 2326151,
      known_for_department: "Acting",
      name: "Paul Mescal",
      original_name: "Paul Mescal",
      popularity: 30.856,
      profile_path: "/vrzZ41TGNAFgfmZjC2sOJySzBLd.jpg",
      cast_id: 10,
      character: "Lucius",
      credit_id: "63b8777a1cfe3a00894541ec",
      order: 0,
    },
  ];

  it("renders correctly", () => {
    const component = render(
      <CreditList title="Test Title" credits={dummyCredits} />
    );
    expect(component).toBeTruthy();
    expect(component.getByText("Test Title")).toBeInTheDocument();
  });

  it("displays the no data when credits in empty", () => {
    const component = render(<CreditList title="Test Title" credits={[]} />);
    expect(component.getByText("Data Not Found")).toBeInTheDocument();
  });
});

describe("CreditList Component", () => {
  const dummyCredit: Credit = {
    adult: false,
    gender: 2,
    id: 2326151,
    known_for_department: "Acting",
    name: "Paul Mescal",
    original_name: "Paul Mescal",
    popularity: 30.856,
    profile_path: "/vrzZ41TGNAFgfmZjC2sOJySzBLd.jpg",
    cast_id: 10,
    character: "Lucius",
    credit_id: "63b8777a1cfe3a00894541ec",
    order: 0,
  };

  it("renders correctly", () => {
    const component = render(<CreditItem credit={dummyCredit} />);
    expect(component).toBeTruthy();
    expect(component.getByText("Paul Mescal")).toBeInTheDocument();
    expect(component.getByText("Lucius")).toBeInTheDocument();
  });

  it("displays subtitle use known_for_department when character in null", () => {
    const _dummyCredit: Credit = {
      ...dummyCredit,
      character: undefined,
    };
    const component = render(<CreditItem credit={_dummyCredit} />);
    expect(component.getByText("Acting")).toBeInTheDocument();
  });

  it("displays the UserIcon when profile_path in null", () => {
    const _dummyCredit: Credit = {
      ...dummyCredit,
      profile_path: undefined,
    };
    const component = render(<CreditItem credit={_dummyCredit} />);
    expect(component.getByTestId("user-profile")).toBeInTheDocument();
  });
});
