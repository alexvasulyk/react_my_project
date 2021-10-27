import avatar from './img/user-logo.png'
import './User.ico.scss';

const Userico = ()=> {
    return (
            <div className="user-img">
                <img className='user-img__avatar' src={avatar} alt="" />
            </div> 
    )
}
export default Userico;
