import logo from './logo.svg';
import './App.css';

function App() {
  const para = document.createElement('p');
  para.textContent = "ceci est un paragraphe";
  document.getElementById('root').append(para);
  return (
    <div>
      <h1>Cours React js</h1>
      <h2>Let's started!</h2>
    </div>
  );
}

export default App;
