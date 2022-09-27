import React, {useState} from 'react';
import Carte from '../ui/Carte';
import DepenseDate from './DepenseDate';

import './DepenseItem.css'

const DepenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
    };

    return (
        <div className='depense-item'>
            <DepenseDate date={props.date}/>
            <div className='depense-item__description'>
                <h2>{title}</h2>
                <div className='depense-item__price'>{props.amount} $</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </div>
    );
};

export default DepenseItem;