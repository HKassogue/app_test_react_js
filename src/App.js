import './App.css';
import React from 'react';
import Depenses from './components/expenses/Depenses'
import NewDepense from './components/newExpense/NewDepense';

const App = () => {
  const depenses = [
    {
      id: 'e1',
      title: 'Papier toilette',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Assurance voiture',
      amount: 294.67,
      date: new Date(2021, 2, 20),
    },
    {
      id: 'e4',
      title: 'PC',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  /* return (
    <div>
      <h1>Cours React js</h1>
      <h2>Let's started!</h2>
      <Depenses depenses={depenses} />
    </div>
  ); */

  /* return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Cours React js'),
    React.createElement('h2', {}, "Let's started!"),
    React.createElement(Depenses, {depenses: depenses})
  ); */

  return (
    <div>
      <NewDepense />
      <Depenses depenses={depenses} />
    </div>
  );


}

export default App;
