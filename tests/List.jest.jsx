import { render, screen } from "@testing-library/react";
import List from "../src/components/List";
import { items } from "../src/constants/items";

describe("List component", () => {
  it("should render a list of items", () => {
    render(
      <List items={items} handleCheckItems={jest.fn()} checkedItems={[]} />
    );

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
