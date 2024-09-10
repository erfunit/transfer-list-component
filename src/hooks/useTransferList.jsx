import { useState } from "react";
import { items } from "../constants/items";

export const useTransferList = () => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckItems = (item) => {
    const checkedIndex = checkedItems.findIndex((c) => c === item);
    const newCheckedItems = [...checkedItems];
    if (checkedIndex >= 0) {
      newCheckedItems.splice(checkedIndex, 1);
    } else {
      newCheckedItems.push(item);
    }
    setCheckedItems(() => newCheckedItems);
  };

  const handleMoveToRight = () => {
    const newRightItems = [...rightItems];
    let newLeftItems = [...leftItems];

    const itemsToMove = checkedItems.filter((i) => leftItems.includes(i));

    newRightItems.push(...itemsToMove);
    newLeftItems = newLeftItems.filter((i) => !checkedItems.includes(i));
    setRightItems(newRightItems);
    setLeftItems(newLeftItems);
    setCheckedItems([]);
  };

  const handleMoveToLeft = () => {
    const newLeftItems = [...leftItems];
    let newRightItems = [...rightItems];

    const itemsToMove = checkedItems.filter((i) => rightItems.includes(i));

    newLeftItems.push(...itemsToMove);
    newRightItems = newRightItems.filter((i) => !checkedItems.includes(i));
    setLeftItems(newLeftItems);
    setRightItems(newRightItems);
    setCheckedItems([]);
  };

  return {
    rightItems,
    leftItems,
    handleMoveToLeft,
    handleMoveToRight,
    checkedItems,
    handleCheckItems,
  };
};
