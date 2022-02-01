import { useState } from 'react';
import '../css/TodoItem.css';

const TodoItem = (props) => {
    const [checked, setChecked] = useState(false);

    const onChecked = () => {
        setChecked((current) => !current);
    }
    const deleteTodo = (event) => {

        if (window.confirm('delete todo item?')) {
            let temp = props.todos;
            temp.splice(event.currentTarget.id, 1);
            props.setTodos([...temp]);
        }
    }
    const checkTodo = (event) => {
        onChecked();
        console.log(props.todos);
        let temp = props.todos;
        temp[event.currentTarget.id].checked = !props.todos[event.currentTarget.id].checked;
        props.setTodos([...temp]);
    };

    console.log(props.item);
    return (
        <div className={props.item.checked ? 'item checked' : 'item'}>
            <span>{props.index + 1}.</span>
            <span>{props.item.text}</span>
            <i id={props.index} onClick={checkTodo} className={!checked ? 'far fa-check-circle' : 'fas fa-check-circle'}></i>
            <i id={props.index} onClick={deleteTodo} className="fas fa-times-circle"></i>
        </div>
    )
}

export default TodoItem;