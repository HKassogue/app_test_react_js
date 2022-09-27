import './App.css';
import DepenseItem from './components/DepenseItem';

function App() {
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


  return (
    <div>
      <h1>Cours React js</h1>
      <h2>Let's started!</h2>
      <DepenseItem
        title = {depenses[0].title}
        amount = {depenses[0].amount}
        date = {depenses[0].date}
      />

      <DepenseItem
        title = {depenses[1].title}
        amount = {depenses[1].amount}
        date = {depenses[1].date}
      />

      <DepenseItem
        title = {depenses[2].title}
        amount = {depenses[2].amount}
        date = {depenses[2].date}
      />

      <DepenseItem
        title = {depenses[3].title}
        amount = {depenses[3].amount}
        date = {depenses[3].date}
      />
    </div>
  );
}

export default App;
