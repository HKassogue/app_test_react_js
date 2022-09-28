import React, {useState} from "react";
import './DepenseForm.css';


const DepenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amontChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dataChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    return <form>
        <div className="new-depense__controls">
            <div className="new-depense__control">
                <label>Titre</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-depense__control">
                <label>Montant</label>
                <input type='number' min='0.01' step='0.01' onChange={amontChangeHandler}/>
            </div>
            <div className="new-depense__control">
                <label>Date</label>
                <input type='date' min='2022-03-02' max='2022-09-02' onChange={dataChangeHandler}/>
            </div>
        </div>
        <div className="new-depense__actions">
            <button type="submit">Add Depense</button>
        </div>
    </form>
};

export default DepenseForm;