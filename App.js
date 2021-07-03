import './App.css';
import ListCards from './components/cards/ListCards';
import Calculadora from './components/navbar/calculadora';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListCards/>
      <Calculadora/>
    </div>
  );
}

export default App;

