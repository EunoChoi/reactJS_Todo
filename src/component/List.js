import { useState } from 'react';
import Insert from './Insert.js';
import TodoItem from './TodoItem.js';
import HabitItem from './HabitItem.js';
import '../css/List.css';

const List = (props) => {

    const [toggle, setToggle] = useState(false);
    //click 'toggle button fucntion'
    const onToggle = () => {
        setToggle((current) => !current);
    };


    let selected;
    if (props.titleSelection === true) selected = props.todos;
    else selected = props.habits;

    return (
        <>
            {console.log('TodoList')}

            <div className='List'>

                {selected.map((item, index) => (
                    props.titleSelection ?
                        <TodoItem
                            todos={props.todos}
                            setTodos={props.setTodos}
                            key={index}
                            index={index}
                            item={item} /> :
                        <HabitItem
                            habits={props.habits}
                            setHabits={props.setHabits}
                            key={index}
                            index={index}
                            item={item} />
                ))}

                <button className='toggleBtn' onClick={onToggle}>➕</button>
            </div>

            {toggle ? <Insert
                onToggle={onToggle}
                todos={props.todos}
                setTodos={props.setTodos}
                habits={props.habits}
                setHabits={props.setHabits}
                titleSelection={props.titleSelection} /> : null}
        </>
    );
};


export default List;
