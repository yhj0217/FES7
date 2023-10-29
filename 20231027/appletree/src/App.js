import "./App.css";
import AppleData from "./data.json";
import React, { useEffect, useState } from "react";
import Apple from "./components/Apple";

function parseData() {
  const apples = {};

  AppleData.forEach((item) => {
    apples[item.id] = item;
  });

  return apples;
}

function positionApples(apples) {
  Object.values(apples).forEach((apple) => {
    apple.position = {
      left: apple.offset.x,
      top: apple.offset.y,
    };
  });
}

function App() {
  // 사과들의 상태 정보 관리
  const [apples, setApples] = useState({});

  useEffect(() => {
    const parsedApples = parseData();
    positionApples(parsedApples);
    setApples({ ...parsedApples });
  }, []);

  const AppleList = Object.values(apples).map((apple) => {
    return <Apple key={apple.id} apple={apple} />;
  });

  return (
    <div className="App">
      <ul>{AppleList}</ul>
    </div>
  );
}
export default App;
