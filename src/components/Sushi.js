import React, { useState } from "react";

function Sushi({ data, setMoney, money, setPlates }) {
  const [empty, setEmpty] = useState(false);

  const handlePlate = () => {
    if (money >= data.price) {
      setPlates((current) => {
        const copy = [...current, 1];
        const Copy1 = copy.splice(1, 1);
        const newArray = copy.concat(Copy1);
        console.log(newArray.length);
        return newArray;
      });
    } else {
      return false;
    }
    if (money >= data.price) {
      setEmpty(!empty);
    }

    if (money >= data.price) {
      setMoney((current) => Number(current) - Number(data.price));
    } else {
      return console.log("Sorry There is Not Money");
    }
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlate}>
        {empty ? null : <img src={data.img_url} alt={data.name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {data.name} - ${data.price}
      </h4>
    </div>
  );
}

export default Sushi;
