import { act } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useTransferList } from "../src/hooks/useTransferList";
import { items } from "../src/constants/items";

describe("useTransferList hook", () => {
  it("should initialize with items on the left and no items on the right", () => {
    const { result } = renderHook(() => useTransferList());

    expect(result.current.leftItems).toEqual(items);
    expect(result.current.rightItems).toEqual([]);
    expect(result.current.checkedItems).toEqual([]);
  });

  test("should move selected items to the right", () => {
    const { result } = renderHook(() => useTransferList());

    act(() => result.current.handleCheckItems(items[0]));

    act(() => result.current.moveToRight());

    expect(result.current.rightItems).toContain(items[0]);
  });

  it("should move selected items to the left", () => {
    const { result } = renderHook(() => useTransferList());

    act(() => result.current.handleCheckItems(items[0]));
    act(() => result.current.moveToRight());
    act(() => result.current.handleCheckItems(items[0]));
    act(() => result.current.moveToLeft());

    expect(result.current.leftItems).toContain(items[0]);
    expect(result.current.rightItems).not.toContain(items[0]);
  });
});
