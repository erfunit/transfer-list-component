import React from "react";
import List from "./components/List";
import Actions from "./components/Actions";
import Container from "./components/Container";
import { useTransferList } from "./hooks/useTransferList";

const App = () => {
  const {
    rightItems,
    leftItems,
    handleMoveToRight,
    handleMoveToLeft,
    checkedItems,
    handleCheckItems,
  } = useTransferList();

  return (
    <div className="flex app">
      <Container>
        <List
          checkedItems={checkedItems}
          handleCheckItems={handleCheckItems}
          items={leftItems}
        />
        <Actions
          moveToLeft={handleMoveToLeft}
          moveToRight={handleMoveToRight}
        />
        <List
          checkedItems={checkedItems}
          handleCheckItems={handleCheckItems}
          items={rightItems}
        />
      </Container>
    </div>
  );
};

export default App;
