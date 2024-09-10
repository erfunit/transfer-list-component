import React from "react";

const Actions = ({ moveToLeft, moveToRight }) => {
  return (
    <div className="flex actions">
      <button onClick={moveToRight} test-id="move-to-right">
        &gt;
      </button>
      <button onClick={moveToLeft} test-id="move-to-left">
        &lt;
      </button>
    </div>
  );
};

export default Actions;
