import React from 'react';
import DepenseItem from './DepenseItem';
import './Depenses.css'

const Depenses = (props) => {
    return (
        <div className='depenses'>
          {
            props.depenses.map((depense, i) => <DepenseItem
              title = {depense.title}
              amount = {depense.amount}
              date = {depense.date} />
            )
          }
        </div>
      );
};

export default Depenses;