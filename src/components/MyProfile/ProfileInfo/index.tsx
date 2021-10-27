import './ProfileInfo.scss'
import IMG from './img/Avatar.png'
import{Link} from 'react-router-dom'
interface proSto{
    btn:any;
}
function index({btn}:proSto) {
    return (
        <div className="profile-info">
            <div className="profile-info__wrapper">
            <div className="profile-info__text">
                <span className="profile-info__text-title">Profile information</span>
                <Link to='/login'><button className="btn__log-out">Log out</button></Link>
            </div>
            <div className="profile-info__main">
                <img src={IMG} alt="" />
                <div className="profile-info__main-info">
                    <label htmlFor="name">First Name</label>
                    <input type="text" name="name" />
                    <label htmlFor="family">Second Name</label>
                    <input type="text" name="family" />
                </div>
               </div> 
                <div className="profile-info__other">
                    <label htmlFor="job">Job Title</label>
                    <input type="text" name="name" />
                    <label htmlFor="description">Description</label>
                    <input type="text" name="family" />
                </div>
                <div className="profile-info__btn">
                    <button onClick={btn} className='profile-info__btn-cancel'>Cancel</button>
                    <button className='profile-info__btn-save'>Save</button>
                </div>
            </div>
            </div>
    )
}

export default index