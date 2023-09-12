//Создается карта, в последствии в которую будут помещаться CostItemы и Сама оболочка Costs
import './Card.css';

const Card = props => {
    const classes = 'card ' + props.className;
    
    return <div className={classes}>{props.children}</div>;
}

export default Card;