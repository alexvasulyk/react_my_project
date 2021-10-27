import IMG from './img/Group.png'
import './Registration.scss'
import { Link } from 'react-router-dom'

function Registration() {
    return (
        <div className="registration">
            <div className="registration__wrapper">
                <img className="registration__img"src={IMG} alt="" />
                <div className="registration-main">
                    <span className="registration-main__title">Sign Up</span>
                    <form action="log-in" className="login-main__form">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="example@mail.com" />
                        <label htmlFor="name">User Name</label>
                        <input type="text" placeholder="alexexample..." />
                        <label htmlFor="email">Password</label>
                        <input type="password" placeholder="Type in..." />
                    </form>
                    <button className="registration-main__log">Log in</button>
                    <div className="registration-main__des">
                        <span className="registration-main__des-text">Have a account?</span>
                        <Link to="/login"><button className="registration-main__des-reg">Log In</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
