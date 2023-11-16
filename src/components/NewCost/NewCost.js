import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {

  const saveCostDataHandler = inputCostData =>{
    const costData ={
      ...inputCostData,
      id: Math.random().toString()
    }

    console.log(costData);

    props.onAddCost(costData)
  }


    return(
        <div className='new-cost'>
          <CostForm onSaveCostData={saveCostDataHandler} onDisapperForm={props.onDisapperForm} onRevealForm={props.onRevealForm}/>  
          <button className='new-cost__button' onClick={props.onRevealForm}>Добавить Новый Расход</button>
        </div>
        
    )
}

export default NewCost;