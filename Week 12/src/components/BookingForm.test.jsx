import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, test, expect, afterEach } from "vitest";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("Book Ticket button exists", () => {
    render(<BookingForm />);
    const button = screen.getByText("Book Ticket");
    expect(button).toBeDefined();
  });

  test("Form inputs exist and accept input values", () => {
    const { container } = render(<BookingForm />);
    
    const sourceInput = screen.getByPlaceholderText("Source City");
    const destInput = screen.getByPlaceholderText("Destination City");
    const dateInput = container.querySelector('input[type="date"]');

    expect(sourceInput).toBeDefined();
    expect(destInput).toBeDefined();
    expect(dateInput).toBeDefined();

    // Simulate user typing
    fireEvent.change(sourceInput, { target: { value: "New York" } });
    fireEvent.change(destInput, { target: { value: "London" } });
    fireEvent.change(dateInput, { target: { value: "2026-06-15" } });

    expect(sourceInput.value).toBe("New York");
    expect(destInput.value).toBe("London");
    expect(dateInput.value).toBe("2026-06-15");
  });

  test("Submitting the form displays success message and clears inputs", () => {
    const { container } = render(<BookingForm />);

    const sourceInput = screen.getByPlaceholderText("Source City");
    const destInput = screen.getByPlaceholderText("Destination City");
    const dateInput = container.querySelector('input[type="date"]');
    const submitButton = screen.getByText("Book Ticket");

    // Fill in details
    fireEvent.change(sourceInput, { target: { value: "Chicago" } });
    fireEvent.change(destInput, { target: { value: "Miami" } });
    fireEvent.change(dateInput, { target: { value: "2026-07-20" } });

    // Submit form
    fireEvent.click(submitButton);

    // Verify success message is shown
    const successHeader = screen.getByRole("heading", { level: 3 });
    expect(successHeader).toBeDefined();
    expect(successHeader.textContent).toContain("Ticket Booked Successfully!");
    expect(successHeader.textContent).toContain("Chicago → Miami");
    expect(successHeader.textContent).toContain("on 2026-07-20");

    // Verify fields are cleared
    expect(sourceInput.value).toBe("");
    expect(destInput.value).toBe("");
    expect(dateInput.value).toBe("");
  });
});
