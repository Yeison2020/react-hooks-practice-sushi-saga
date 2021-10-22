import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, SetShushiList] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then(SetShushiList);
  }, []);

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} setMoney={setMoney} money={money} />
      <Table money={money} />
    </div>
  );
}

export default App;
