import './DepenseItem.css'

function DepenseItem(props) {
    
    return (
        <div className='depense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='depense-item__description'>
                <h2>{props.title}</h2>
                <div className='depense-item__price'>{props.amount} $</div>
            </div>
        </div>
    );
}

export default DepenseItem;