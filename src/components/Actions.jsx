import React from "react";

const Actions = ({ moveToLeft, moveToRight }) => {
  return (
    <div className="flex actions">
      <button onClick={moveToRight}>&gt;</button>
      <button onClick={moveToLeft}>&lt;</button>
    </div>
  );
};

export default Actions;
