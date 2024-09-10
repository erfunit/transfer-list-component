import React from "react";
import List from "./components/List";
import Actions from "./components/Actions";
import Container from "./components/Container";
import { useTransferList } from "./hooks/useTransferList";

const App = () => {
  const {
    rightItems,
    leftItems,
    moveToRight,
    moveToLeft,
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
        <Actions moveToLeft={moveToLeft} moveToRight={moveToRight} />
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
