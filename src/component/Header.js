import '../css/Header.css';
const Header = ({ titleSelection, setTitleSelection }) => {

    const todoSelect = () => {
        setTitleSelection(true);
    };
    const habitSelect = () => {
        setTitleSelection(false);
    };
    return (<header>
        <div className='title'>Check It!</div>
        <div className='subTitle'>
            <div className={`subTitle__todo ${titleSelection ? 'selected' : 'unSelected'}`}
                onClick={todoSelect}>Todo</div>
            <div className={`subTitle__habit ${!titleSelection ? 'selected' : 'unSelected'}`}
                onClick={habitSelect}>Habit</div>
        </div>
    </header>);
}

export default Header;