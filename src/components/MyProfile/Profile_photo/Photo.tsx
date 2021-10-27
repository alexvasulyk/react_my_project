import './Photo.scss'
import Photo_01 from './img/photo_01.png'
import Photo_02 from './img/photo_02.png'
import Photo_03 from './img/photo_03.png'
import Photo_04 from './img/photo_04.png'
import Photo_05 from './img/photo_05.png'
import Photo_06 from './img/photo_06.png'

function Photo() {
    return (
        <div className='photo-colections'>
            <img src={Photo_01} alt="" />
            <img src={Photo_02} alt="" />
            <img src={Photo_03} alt="" />
            <img src={Photo_04} alt="" />
            <img src={Photo_05} alt="" />
            <img src={Photo_06} alt="" />
        </div>
    )
}

export default Photo;
