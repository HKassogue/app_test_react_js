import Carte from '../ui/Carte';
import DepenseDate from './DepenseDate';

import './DepenseItem.css'

const DepenseItem = (props) => {
    
    return (
        <div className='depense-item'>
            <DepenseDate date={props.date}/>
            <div className='depense-item__description'>
                <h2>{props.title}</h2>
                <div className='depense-item__price'>{props.amount} $</div>
            </div>
        </div>
    );
}

export default DepenseItem;