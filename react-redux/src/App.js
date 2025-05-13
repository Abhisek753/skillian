
import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
    <div>
      <h2>This is our first redux project</h2>
    </div>
    <div>
      <Counter/>
    </div>
    <div>
      <Todo/>
    </div>
    </div>
  );
}

export default App;
