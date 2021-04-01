import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  return (
    <div className="App">
      <h1>My Todo-List</h1>
      <Form/>
      <Todolist/>
    </div>
  );
}

export default App;
