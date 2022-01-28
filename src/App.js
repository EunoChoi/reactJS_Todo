import { useState } from 'react';
import TodoList from './component/TodoList.js';
import InsertTodo from './component/InsertTodo.js';

//css
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(false);

  const onTodos = (value) => {
    console.log(todos);
    setTodos(value);
  };
  //click 'toggle button fucntion'
  const onToggle = () => {
    setToggle((current) => !current);
  };

  return (
    <div className="App">
      {
        console.log('app')
      }
      <h1>My Todo List</h1>

      <TodoList
        todos={todos}
        setTodos={onTodos} />

      <button className='toggleBtn' onClick={onToggle}>➕</button>

      {toggle ? <InsertTodo
        onToggle={onToggle}
        todos={todos}
        setTodos={onTodos} /> : null}
    </div>


  );
}

export default App;



/*

<TodoList
        todos={todos}
        setTodos={(value) =>
          setTodos(value)} />



<InsertTodo
        todos={todos}
        setTodos={(value) =>
          setTodos(value)} />
  

        
  */