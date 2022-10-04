import React from "react";
import DepenseForm from "./DepenseForm";

import './NewDepense.css'

const NewDepense = (props) => {
    const saveDepenseDataHandler = (enteredDepenseData) => {
        const depenseData = {
            ...enteredDepenseData,
            id: Math.random().toString()
        };
        //console.log(depenseData);
        props.onAddDepense(depenseData);
    }


    return (
        <div className="new-depense">
            <DepenseForm onSaveDepenseData={saveDepenseDataHandler}/>
        </div>
    );
};

export default NewDepense;