import { renderHook } from "@testing-library/react-hooks";
import { describe, it } from "vitest";
import usePrev from "./usePrev";

describe("usePrev", () => {
  it("should render correctly", () => {
    renderHook(() => usePrev("d"));
  });
});
