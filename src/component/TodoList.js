import '../component/TodoList.css';

const TodoList = (props) => {

    //component의 index로 component의 id를 정해주기 때문에 
    //클릭한 component 값들이 저장된 todos에서 id값과 같은 index 자리의 값을 삭제한다
    const deleteItem = (event) => {
        let temp = props.todos;
        temp.splice(event.currentTarget.id, 1);
        //console.log(temp);
        props.setTodos([...temp]);
    }
    const checkItem = (event) => {
        let temp = props.todos;
        temp[event.currentTarget.id].checked = !props.todos[event.currentTarget.id].checked;
        props.setTodos([...temp]);
        console.log(props.todos);
    };

    return (
        <>
            {console.log('TodoList')}
            <hr />
            <ul>
                {props.todos.map((todo, index) => (
                    <div className='listItem' key={index}>
                        <span className={todo.checked ? "checked" : null} onClick={checkItem} id={index} key={`text${index}`}>{todo.text}</span>
                        <button onClick={deleteItem} id={index} key={`delbtn${index}`}>X</button>
                    </div>))}
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