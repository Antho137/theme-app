import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders Header title ", () => {
    render(<App />);
    expect(screen.getByText("Theme App")).toBeInTheDocument();
    expect(screen.getByText("Theme App")).toBeVisible();
  });
  it("renders Header button ", () => {
    render(<App />);
    const button = screen.getByRole("button");
    userEvent.click(button);
  });

  it("renders h2 element", () => {
    render(<App />);
    expect(
      screen.getByText("New opportunities for Life Equality Chances")
    ).toBeInTheDocument();
  });
});
