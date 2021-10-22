import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, setMoney, money }) {
  const [amout, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(4);

  const copyData = [...sushiList];

  const handleAmount = () => {
    setAmount((c) => c + 4);
    setAmount2((c) => c + 4);
  };

  return (
    <div className="belt">
      {copyData.slice(amout, amount2).map((data) => {
        return (
          <Sushi key={data.id} data={data} setMoney={setMoney} money={money} />
        );
      })}
      <MoreButton handleAmount={handleAmount} />
    </div>
  );
}

export default SushiContainer;
