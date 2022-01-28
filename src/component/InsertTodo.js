import { useState } from "react/cjs/react.development";

const InsertTodo = (props) => {


    const [Num, setNumber] = useState(0);
    //const [todos, setTodos] = useState({ text: [], checked: [] });
    const [insertState, setInsertState] = useState(false);
    const [input, setInput] = useState('');


    //click 'plus button fucntion'
    const onClick = () => {
        setInsertState(insertState ? false : true);
    };
    //change 'input box text change'
    const onChange = (event) => {
        setInput(event.target.value);
    };


    //click submit button
    const onSubmit = (event) => {
        event.preventDefault();
        props.setTodos((current) => [...current, { id: Num, text: input, checked: false }]);
        setNumber(current => current + 1);
        setInput('');
    };


    //render
    return (
        <>
            <button onClick={onClick}>➕</button>
            {insertState ? (
                <form>
                    <input onChange={onChange} value={input} />
                    <button onClick={onSubmit} type="submit">Add</button>
                </form>
            ) : null}
        </>
    );
};

export default InsertTodo;

/*

    //click plus button
    const onClick = () => {
        setInsertState(insertState ? false : true);
    };

    //change input box text
    const onChange = (event) => {
        setInput(event.target.value);
    };

    //click submit button
    const onSubmit = (event) => {
        event.preventDefault();
        todos.setTodos((current) => [...current, { id: Num, text: input, checked: false }]);
        setNumber(current => current + 1);
        setInput('');
    };


    return (
        <>
            <button onClick={onClick}>➕</button>
            {insertState ? (
                <form>
                    <input onChange={onChange} value={input} />
                    <button onClick={onSubmit} type="submit">Add</button>
                </form>
            ) : null}
        </>
    );
*/