import IMG from './img/Group.png'
import './Login.scss'
import{Link} from 'react-router-dom'

function index() {
    return (
        <div className="login">
            <div className="login__wrapper">
                <img className='login__img' src={IMG} alt="" />
                <div className="login-img-before"></div>
                <div className="login-main">
                    <span className="login-main__title">Log In</span>
                        <form action="log-in" className="login-main__form">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="example@mail.com" />
                            <label htmlFor="email">Password</label>
                            <input type="password" placeholder="Type in..." />
                        </form>
                    <button className="login-main__log">Log in</button>
                    <div className="login-main__des">
                        <span className="login-main__des-text">Don't have an account?</span>
                        <Link to="/registration"><button className="login-main__des-reg">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
