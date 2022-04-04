import './App.css';
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className='my-3'>Todo List React Menggunakan Redux</h1>
        <CreateTodo />
        <Table />
      </div>
    </div>
  );
}

export default App;
