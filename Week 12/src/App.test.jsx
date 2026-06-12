import { render, screen, cleanup } from "@testing-library/react";
import { describe, test, expect, vi, afterEach } from "vitest";
import App from "./App";

describe("App Component Integration", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the Airline Booking application with the airline name", () => {
    // Mock the environment variable in case it is not loaded during test execution
    vi.stubEnv("VITE_AIRLINE_NAME", "SkyJet Airlines");

    render(<App />);

    // Check that the airline name heading is present
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toBe("SkyJet Airlines");

    // Check that BookingForm is rendered inside App
    const formHeading = screen.getByRole("heading", { level: 2 });
    expect(formHeading.textContent).toBe("Flight Booking");
    
    vi.unstubAllEnvs();
  });
});
