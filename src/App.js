import React, { useState, useEffect } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { Context } from "./components/Costs/Context";
const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 6, 27).toString(),
    description: "Huawei MateBook pro",
    amount: 2000,
  },
  {
    id: "c2",
    date: new Date(2021, 12, 31).toString(),
    description: "Cristmas presents",
    amount: 149.99,
  },
  {
    id: "c3",
    date: new Date(2021, 9, 10).toString(),
    description: "Pants",
    amount: 45,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      if (!cost.description || !cost.amount || !cost.date) {
        alert("Введите данные в форму!");

        return [...prevCosts];
      }

      return [cost, ...prevCosts];
    });
  };
  useEffect(() => {
    // Читаем данные из localStorage при загрузке страницы
    const raw = localStorage.getItem("costs");

    console.log(raw);

    if (raw) {
      console.log(JSON.parse(raw));
      setCosts(JSON.parse(raw));
    }
  }, []);

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

  useEffect(() => {
    // Сохраняем данные в localStorage при изменении стейта costs
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  const deleteCostHandler = (id) => {
    // Фильтруем массив costs, исключая объект с указанным id
    const updatedCosts = costs.filter((cost) => cost.id !== id);
    setCosts(updatedCosts);

    // Сохраняем обновленные данные в localStorage
    localStorage.setItem("costs", JSON.stringify(updatedCosts));
  };

  const removeTodoHandler = id =>{
      setCosts(costs.filter(cost=>{
        return cost.id !== id;
      }))
  }



  return (
    <Context.Provider value={removeTodoHandler}>
      <div>
        <NewCost
          onAddCost={addCostHandler}
          onDisapperForm={disapperFormHandler}
          onRevealForm={revealFormHandler}
        />
        <Costs costs={costs} onDelete={deleteCostHandler}/>
      </div>
    </Context.Provider>
    
  );
}

export default App;
