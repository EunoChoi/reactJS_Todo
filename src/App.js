import { useState } from 'react';
import List from './component/List.js';
import Header from './component/Header.js';
//css
import './css/App.css';

function App() {
  const [titleSelection, setTitleSelection] = useState(true);
  const [todos, setTodos] = useState([]);
  const [habits, setHabits] = useState([]);

  const onTodos = (value) => {
    console.log(todos);
    setTodos(value);
  };
  const onHabits = (value) => {
    console.log(habits);
    setHabits(value);
  };

  return (
    <div className="App">
      {
        console.log('app')
      }
      <Header
        titleSelection={titleSelection}
        setTitleSelection={(value) => setTitleSelection(value)} />


      <List
        todos={todos}
        setTodos={onTodos}
        habits={habits}
        setHabits={onHabits}
        titleSelection={titleSelection} />


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