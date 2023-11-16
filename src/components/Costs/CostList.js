import CostItem from "./CostItem";
import './CostList.css';
import { Context } from "./Context";
import { useContext } from "react";
const CostList = props => {

    if(props.costs.length === 0){
       return <h2 className="cost-list__fallback">В Этом Году Нет Расходов!</h2>
    }
    
    return (<ul className="cost-list">
        {props.costs.map(cost =>(
            <CostItem  
            onDelete={props.onDelete}
            key ={cost.id}
            date={cost.date} 
            description={cost.description} 
            amount={cost.amount}
            />
            
        ))}
    </ul>)
}

export default CostList;