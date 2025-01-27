import App from "App";
import { describe, expect, it, Mock, vi } from "vitest";

vi.mock("react-dom/client", () => {
  const mockRender = vi.fn();
  const mockCreateRoot = vi.fn(() => ({
    render: mockRender,
  }));
  return {
    createRoot: mockCreateRoot,
  };
});

describe("main", async () => {
  it("should run correctly", async () => {
    const { createRoot: mockCreateRoot } = await import("react-dom/client");
    await import("./main");

    expect(mockCreateRoot as Mock).toHaveBeenCalledOnce();
    const mockRender = (mockCreateRoot as Mock).mock.results[0].value.render;
    expect(mockRender).toHaveBeenCalledOnce();
    expect(mockRender).toHaveBeenCalledWith(<App />);
  });
});
