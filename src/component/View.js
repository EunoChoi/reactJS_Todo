import '../css/View.css';

const View = (props) => {
    return (
        <>
            <div onClick={props.setViewToggle} className="viewBackground">

            </div>
            <i onClick={props.setViewToggle} className="closeBtn fas fa-times-circle"></i>

            <div className='viewText'>
                <span>{props.text}</span>
            </div>

        </>
    );
}

export default View;