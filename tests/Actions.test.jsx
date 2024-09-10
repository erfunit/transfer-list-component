import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Actions from "../src/components/Actions";
import { vi } from "vitest";

describe("Actions component", () => {
  const moveToLeftMock = vi.fn();
  const moveToRightMock = vi.fn();

  it("should call moveToRight and moveToLeft when buttons are clicked", () => {
    render(
      <Actions moveToLeft={moveToLeftMock} moveToRight={moveToRightMock} />
    );

    // Use getByRole or getByTestId instead of getByText
    fireEvent.click(screen.getByRole("button", { name: ">" }));
    expect(moveToRightMock).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "<" }));
    expect(moveToLeftMock).toHaveBeenCalled();
  });
});
