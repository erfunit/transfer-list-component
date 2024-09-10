import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../src/components/Item";
import { vi } from "vitest";

describe("Item component", () => {
  const handleCheckItemsMock = vi.fn();

  it("should render an item and handle checkbox toggle", () => {
    render(
      <Item
        item="Test Item"
        handleCheckItems={handleCheckItemsMock}
        checkedItems={[]}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(handleCheckItemsMock).toHaveBeenCalledWith("Test Item");
  });
});
