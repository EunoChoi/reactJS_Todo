import { useState } from 'react';
import TodoList from './component/TodoList.js';

//css
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [titleSelection, setTitleSelection] = useState(true);

  const onTodos = (value) => {
    console.log(todos);
    setTodos(value);
  };

  const todoSelect = () => {
    setTitleSelection(true);
  };
  const habitSelect = () => {
    setTitleSelection(false);
  };

  return (
    <div className="App">
      {
        console.log('app')
      }
      <h1 className='title'>Check It!</h1>
      <div className='subTitle'>
        <span className={`subTitle__todo ${titleSelection ? 'selected' : 'unSelected'}`}
          onClick={todoSelect}>Todo</span>
        <span className={`subTitle__habit ${!titleSelection ? 'selected' : 'unSelected'}`}
          onClick={habitSelect}>Habit</span>
      </div>

      {titleSelection ?
        <TodoList
          todos={todos}
          setTodos={onTodos} /> :
        <div>
          <h4>habit list</h4>
          <button className='toggleBtn'>➕</button>
        </div>
      }


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