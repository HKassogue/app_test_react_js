import React from "react";
import './DepenseForm.css';


const DepenseForm = () => {
    return <form>
        <div className="new-depense__controls">
            <div className="new-depense__control">
                <label>Titre</label>
                <input type='text'/>
            </div>
            <div className="new-depense__control">
                <label>Montant</label>
                <input type='number' min='0.01' step='0.01'/>
            </div>
            <div className="new-depense__control">
                <label>Date</label>
                <input type='date' min='2022-03-02' max='2022-09-02'/>
            </div>
        </div>
        <div className="new-depense__actions">
            <button type="submit">Add Depense</button>
        </div>
    </form>
};

export default DepenseForm;