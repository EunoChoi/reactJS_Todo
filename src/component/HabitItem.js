import '../css/HabitItem.css';

const HabitItem = (props) => {

    const onCountDown = (event) => {
        let temp = props.habits;

        if (temp[event.currentTarget.id].count > 0) {
            temp[event.currentTarget.id].count--;
            props.setHabits([...temp]);
        }
    }
    const onCountUp = (event) => {
        let temp = props.habits;
        temp[event.currentTarget.id].count++;
        props.setHabits([...temp]);
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
            <span>{props.item.text} - {props.item.count}</span>
            <i id={props.index} onClick={onCountUp} className="far fa-arrow-alt-circle-up up"></i>
            <i id={props.index} onClick={onCountDown} className="far fa-arrow-alt-circle-down down"></i>
            <i id={props.index} onClick={deleteHabit} className="fas fa-times-circle delete"></i>
        </div>
    )
}

export default HabitItem;