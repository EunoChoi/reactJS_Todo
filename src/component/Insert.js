import { useState } from "react/cjs/react.development";
import '../css/Insert.css';

const Insert = (props) => {


    const [input, setInput] = useState('');
    //change 'input box text change'
    const onChange = (event) => {
        setInput(event.target.value);
    };
    //click submit button
    const onSubmit = (event) => {
        event.preventDefault();
        if (input !== '') {
            if (props.titleSelection === true) {
                props.setTodos((current) => [...current, { text: input, checked: false }]);
            }
            else {
                props.setHabits((current) => [...current, { text: input, checked: false, count: 0 }]);
            }

            props.onToggle();
            setInput('');
        }
    };


    //render
    return (
        <>
            {console.log('Insert')}
            <div className="insertBackground" onClick={props.onToggle}></div>
            <div className="inputBox">
                <form>
                    <input autoFocus onChange={onChange} value={input} />
                    <button onClick={onSubmit} type="submit">Add Todo</button>
                </form>
            </div>
        </>
    );
};

export default Insert;

/*
               
 
*/