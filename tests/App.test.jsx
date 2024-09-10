import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import { items } from "../src/constants/items";

describe("App component", () => {
  it("should render the app and move items between lists", () => {
    render(<App />);
    expect(screen.getByText(items[0])).toBeInTheDocument();
  });
});
