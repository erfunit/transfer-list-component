import React from "react";

const Item = ({ item, handleCheckItems, checkedItems }) => {
  return (
    <label key={item} className="item">
      <input
        onChange={() => handleCheckItems(item)}
        checked={checkedItems.includes(item)}
        type="checkbox"
      />
      <span>{item}</span>
    </label>
  );
};

export default Item;
