import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";

// Two sample tests so `npm test` passes from the starter.
// They do not count toward your required tests. Replace them with tests of your own behavior.
test("shows the Reading Tracker header", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /My Reading Tracker/i })
  ).toBeInTheDocument();
});

test("renders a main landmark", () => {
  render(<App />);
  expect(screen.getByRole("main")).toBeInTheDocument();
});

test("adds a new book to the collection", () => {
  render(<App />);

  const titleInput = screen.getByRole("textbox", {
     name: /title:/i
     });
  const creatorInput = screen.getByRole("textbox", {
     name: /creator:/i
     });

  fireEvent.change(titleInput, {
    target: { value: "The Great Gatsby" }, 
  });
  fireEvent.change(creatorInput, {
    target: { value: "F. Scott Fitzgerald" },
  });
  fireEvent.click(
    screen.getByRole("button", { name: /add book/i })
  );
  
  expect(
    screen.getByText("The Great Gatsby")
  ).toBeInTheDocument();
  expect(
    screen.getByText("F. Scott Fitzgerald")
  ).toBeInTheDocument();
});

test("removes a book from the collection", () => {
  render(<App />);

  expect(
    screen.getByText("Robot Garden")
  ).toBeInTheDocument();

  const removeButtons = screen.getAllByRole("button", {
    name: /remove/i,
   });
  fireEvent.click(removeButtons[0]);

  expect(
    screen.queryByText("Robot Garden")
  ).not.toBeInTheDocument();
});