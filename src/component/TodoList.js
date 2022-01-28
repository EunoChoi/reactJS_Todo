import { useState } from "react/cjs/react.development";

const TodoList = (props) => {


    return (
        <>
            <hr />
            <ul>
                {props.todos.map(
                    (todo, index) =>
                    (<li onClick={(event) => {
                        console.log(event.currentTarget.id);

                        let temp = props.todos;
                        temp.splice(event.currentTarget.id, 1);
                        console.log(temp);
                        props.setTodos([...temp]);
                    }}
                        key={index} id={index}>
                        {todo.text} - {todo.checked ? 'O' : 'X'}
                    </li>)
                )}
            </ul>
            <hr />

        </>
    );
};


export default TodoList;

/*

{todos.map((item, index) =>
                    <li>
                        {item.text}
                    </li>)}
                    


                    <hr />
            <ul>
                {todos.map((todo, index) =>
                (<li onClick={() => {
                    let temp = todos;
                    temp = temp.filter((item) => (item.id) !== index ? item : null);
                    console.log(temp);
                    todos.setTodos('');
                }} key={index}>
                    {todo.id + 1} - {todo.text}-{todo.checked ? 'O' : 'X'}
                </li>)
                )}

            </ul>
            <hr />
                    
                
*/ 