import { useState } from 'react';

import View from './View';
import '../css/TodoItem.css';

const TodoItem = (props) => {
    const [viewToggle, setViewToggle] = useState(false);
    const [viewText, setViewText] = useState('');
    const [checked, setChecked] = useState(false);

    const onChecked = () => {
        setChecked((current) => !current);
    }
    const onViewClick = (event) => {
        setViewText(props.todos[event.currentTarget.id].text);
        setViewToggle(current => !current);
    }
    const onViewToggle = () => {
        setViewToggle(current => !current);
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

    return (
        <>
            {viewToggle ? <View
                text={viewText}
                setViewToggle={onViewToggle}
            /> : null}
            <div className={props.item.checked ? 'item checked' : 'item'}>
                <span>{props.index + 1}.</span>
                <span id={props.index} onClick={onViewClick}>{props.item.text}</span>
                <i id={props.index} onClick={checkTodo} className={!checked ? 'far fa-check-circle' : 'fas fa-check-circle'}></i>
                <i id={props.index} onClick={deleteTodo} className="fas fa-times-circle"></i>
            </div>
        </>

    )
}

export default TodoItem;