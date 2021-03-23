import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  return (
    <div className="App">
      <h1>Firebase Todolist</h1>
      <Form/>
      <Todolist/>
    </div>
  );
}

export default App;
