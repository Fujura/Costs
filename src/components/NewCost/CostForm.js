import { React, useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    sum: "",
    date: "",
  });

  const handlerOnChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const CostData = {
      description: formData.name,
      amount: formData.sum,
      date: new Date(formData.date),
    };
    props.onSaveCostData(CostData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handlerOnChange}
          />
        </div>

        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            name="sum"
            min="0.01"
            step="0.01"
            value={formData.sum}
            onChange={handlerOnChange}
          />
        </div>

        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            name="date"
            min="2020-01-01"
            step="2023-12-31"
            value={formData.date}
            onChange={handlerOnChange}
          />
        </div>

        <div className="new-cost__actions">
          <button onClick={props.onDisapperForm} type="submit">
            Добавить Расход
          </button>
          <button onClick={props.onDisapperForm}>Отмена</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
