import './Dropdown.scss';
const Dropdown = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item-main'>EN</li>
                <ul className='nav__list-other'>
                    <li className='nav__item '>UA</li>
                    <li className='nav__item'>PL</li>
                    <li className='nav__item'>RU</li>
                </ul>
            </ul>
        </nav>
    );
}
export default Dropdown;
