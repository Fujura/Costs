import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 6, 27),
    description: "Huawei MateBook pro",
    amount: 2000,
  },
  {
    id: "c2",
    date: new Date(2021, 12, 31),
    description: "Cristmas presents",
    amount: 149.99,
  },
  {
    id: "c3",
    date: new Date(2021, 9, 10),
    description: "Pants",
    amount: 45,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  const disapperFormHandler = () => {
    console.log("click!");
    document.querySelector(".new-cost__controls").classList.toggle("active");
    document
      .querySelector(".new-cost__button")
      .classList.toggle("new-cost__active");
  };

  const revealFormHandler = () => {
    document.querySelector(".new-cost__controls").classList.toggle("active");
    document
      .querySelector(".new-cost__button")
      .classList.toggle("new-cost__active");
  };

  return (
    <div>
      <NewCost
        onAddCost={addCostHandler}
        onDisapperForm={disapperFormHandler}
        onRevealForm={revealFormHandler}
      />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
