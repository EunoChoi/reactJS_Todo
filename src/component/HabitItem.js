import { useState } from 'react';
import '../css/HabitItem.css';

const HabitItem = (props) => {
    const [count, setCount] = useState(0);
    const onCountDown = () => {
        if (count > 0) setCount(current => (current - 1));
    }
    const onCountUp = () => {
        setCount(current => (current + 1));
    }
    const deleteHabit = (event) => {

        if (window.confirm('delete habit item?')) {
            let temp = props.habits;
            temp.splice(event.currentTarget.id, 1);
            props.setHabits([...temp]);
        }
    }

    console.log(props.item);
    return (
        <div className={props.item.checked ? 'habitItem checked' : 'habitItem'}>
            <span>{props.index + 1}.</span>
            <span>{props.item.text} - {count}</span>
            <i onClick={onCountUp} className="far fa-arrow-alt-circle-up up"></i>
            <i onClick={onCountDown} className="far fa-arrow-alt-circle-down down"></i>
            <i id={props.index} onClick={deleteHabit} className="fas fa-times-circle delete"></i>
        </div>
    )
}

export default HabitItem;