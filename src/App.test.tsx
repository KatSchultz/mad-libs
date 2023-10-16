import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders saved stories link", () => {
    render(<App />);
    const linkElement = screen.getByText(/saved stories/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders create story link", () => {
    render(<App />);
    const linkElement = screen.getByText(/create a new story/i);
    expect(linkElement).toBeInTheDocument();
  });
});
