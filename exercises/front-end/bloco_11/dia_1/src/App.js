import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  )
};
const compromissos = ['acordar', 'tomar água com limão', 'assistir videos aleatórios no youtube'];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            compromissos.map((compromisso) => <li>{compromisso}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
