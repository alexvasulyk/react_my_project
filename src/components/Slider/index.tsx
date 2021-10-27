import './Slider.scss';
import img_1 from './img/Avatar-1.png';
import img_2 from './img/Avatar-2.png';
import img_3 from './img/Avatar-3.png';
import img_4 from './img/Avatar-4.png';
import img_5 from './img/Avatar-5.png';
import img_6 from './img/Avatar-6.png';

const index = () => {
    return (
        <div className='stories'>
            <div className="stories-scroll">
                <div className="stories-avatar border">
                    <img src={img_1} alt="" />
                    <img src={img_2} alt="" />
                    <img src={img_3} alt="" />
                    <img src={img_4} alt="" />
                    <img src={img_1} alt="" />
                    <img src={img_6} alt="" />
                    <img src={img_5} alt="" />
                </div>

            </div>
        </div>
    )
}
export default index;