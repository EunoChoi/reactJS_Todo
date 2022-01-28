import { useEffect, useState } from 'react';
import TodoList from './component/TodoList.js';
import InsertTodo from './component/InsertTodo.js';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.development';


function App() {

  const [todos, setTodos] = useState([]);

  /*이런 형태를 가지는 state를 만들어야 한다
  const input = {
    text: ,
    checked:
  };
  */

  return (

    <div className="App">
      <h1>My Todo List</h1>

      <TodoList
        todos={todos}
        setTodos={(value) =>
          setTodos(value)} />

      <InsertTodo
        todos={todos}
        setTodos={(value) =>
          setTodos(value)} />


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