import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the App component", () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Vite/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders a button with correct text", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /Click me/i });
  expect(buttonElement).toBeInTheDocument();
});
