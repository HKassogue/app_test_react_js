import React, {useState} from "react";
import './DepenseForm.css';


const DepenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     enteredTitle: event.target.value,
        //     ...userInput,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value,}
        // })
    };

    const amontChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     enteredAmount: event.target.value,
        //     ...userInput,
        // })
    };

    const dataChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     enteredDate: event.target.value,
        //     ...userInput,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const depenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //console.log(depenseData);
        props.onSaveDepenseData(depenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-depense__controls">
            <div className="new-depense__control">
                <label>Titre</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-depense__control">
                <label>Montant</label>
                <input type='number' 
                min='0.01' 
                step='0.01' 
                value={enteredAmount}
                onChange={amontChangeHandler}/>
            </div>
            <div className="new-depense__control">
                <label>Date</label>
                <input type='date' 
                min='2022-03-02' 
                max='2022-09-02' 
                value={enteredDate}
                onChange={dataChangeHandler}/>
            </div>
        </div>
        <div className="new-depense__actions">
            <button type="submit" onClick={submitHandler}>Add Depense</button>
        </div>
    </form>
};

export default DepenseForm;