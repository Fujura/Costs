//CostItem куда передается props
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter/CostsFilter";
import { React, useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";


const Costs = (props) => {
  const [selectedYear, setYear] = useState("2023");

  const getFiltredYear = (year) => {
    setYear(year);
  };
  const filtredYear = props.costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={getFiltredYear} />
        <CostsDiagram costs={filtredYear}/>
        <CostList costs = {filtredYear}/>
      </Card>
    </div>
  );
};

export default Costs;
