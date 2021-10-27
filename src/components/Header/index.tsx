
import './Header.scss';
import logo from './img/logo.png'
import arrow from './img/arrow.png'
import Dropdown from './Dropdown/Dropdown';
import UserIco from './User.ico'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    let button;
    if (location.pathname == "/profile_editor" && window.innerWidth < 1024) {
        button = <Link to='/login'><button className="btn-log-out">Log out</button></Link>
    } else if (location.pathname == "/login" || location.pathname == "/registration" && window.innerWidth < 1024) {
        button = ""
    } else if (location.pathname == "/Profile" && window.innerWidth < 1024) {
        button = <Link className='local-home' to='/'>Home</Link>
    }
    else {
        button = <Link to="/Profile"><UserIco /></Link>
    }
    let logoChange;
    if (location.pathname == "/post" && window.innerWidth < 1024) { logoChange = arrow } else { logoChange = logo }

    return (
        <header className='header'>
            <div className="header-content">
                <Link to='/'><div className="logo"><img src={logoChange} alt="Logo Linkstagram" /></div></Link>
                <div className="nav-bar">
                    <div className="nav-bar-component">
                        <Link className='nav-bar-component__home' to='/'>Home</Link>
                        <Dropdown />
                    </div>
                    {button}
                </div>
            </div>
        </header>
    )
}

export default Header;