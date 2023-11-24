import { render, fireEvent, screen } from "@testing-library/react";
import HeartClick from "./"; // Adjust the import path as needed

// Mock the useWishControl hook

describe("HeartClick", () => {
  it("toggles like state on click", () => {
    render(<HeartClick likes={5} likes_clicked={false} />);

    const heartElement = screen.getByTestId("heart-svg");
    const likesElement = screen.getByText("5");

    // Simulate click
    fireEvent.click(heartElement);

    // Expect the like count to increase
    expect(likesElement.textContent).toBe("6");

    // Simulate another click
    fireEvent.click(heartElement);

    // Expect the like count to decrease
    expect(likesElement.textContent).toBe("5");
  });
});
