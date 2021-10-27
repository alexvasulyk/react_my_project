import ProfileBar from '../profileBar'
import './MyProfile.scss'
import Photo from './Profile_photo/Photo'
function index() {
    return (
        <div className='your-profile'>
            <div className="content">
                <ProfileBar />
            </div>
            <Photo />
            <Photo />
            <Photo />

        </div>
    )
}

export default index;
