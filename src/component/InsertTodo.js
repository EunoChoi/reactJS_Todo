import { useState } from "react/cjs/react.development";
import '../component/InsertTodo.css';

const InsertTodo = (props) => {


    const [input, setInput] = useState('');
    //change 'input box text change'
    const onChange = (event) => {
        setInput(event.target.value);
    };
    //click submit button
    const onSubmit = (event) => {
        event.preventDefault();
        if (input !== '') {
            props.setTodos((current) => [...current, { text: input, checked: false }]);
            props.onToggle();
            setInput('');
        }
    };


    //render
    return (
        <>
            {console.log('InsertTodo')}
            <div className="insertBackground" onClick={props.onToggle}></div>
            <div className="inputBox">
                <form>
                    <input onChange={onChange} value={input} />
                    <button onClick={onSubmit} type="submit">Add Todo</button>
                </form>
            </div>
        </>
    );
};

export default InsertTodo;

/*
               
 
*/