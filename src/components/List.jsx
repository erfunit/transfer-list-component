import React from "react";
import Item from "./Item";

const List = ({ items, handleCheckItems, checkedItems }) => {
  return (
    <div className="flex list">
      {items.map((item) => (
        <Item
          checkedItems={checkedItems}
          handleCheckItems={handleCheckItems}
          item={item}
          key={item}
        />
      ))}
    </div>
  );
};

export default List;
