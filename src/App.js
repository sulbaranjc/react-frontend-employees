import './App.css';
import { Header } from "./components/Header";
import { Employees } from "./components/Employees";
function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <Header/>
      <Employees/>
    </div>
  );
}

export default App;
