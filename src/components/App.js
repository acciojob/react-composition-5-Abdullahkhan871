import React, { useState } from "react";
import "./../styles/App.css";
import Tabs from "./Tabs";

const App = () => {
  const [tabs, setTabs] = useState("");
  const [tabsValue, settabsValue] = useState("");
  const tabs1 = ["Tab 1", "Tab 2", "Tab 3"];
  const tabs2 = ["Tab A", "Tab B", "Tab C"];

  return (
    <div>
      <Tabs props={tabs1} onClick={setTabs} />
      <p>Content for {tabs}</p>
      <Tabs props={tabs2} onClick={settabsValue} />
      <p>Content for {tabsValue}</p>
    </div>
  );
};

export default App;
