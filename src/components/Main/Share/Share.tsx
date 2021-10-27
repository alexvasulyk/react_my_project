import './Share.scss'
import userOne from './img/1.png'
import userTwo from './img/2.png'
import userThree from './img/3.png'
import userFour from './img/4.png'

function Share() {
    return (
        <div className="share">
            <div className="share-wrapper">
                <input type="text" className="share-inpt" placeholder="Search" />
                <div className="share-user">
                    <img src={userOne} alt="" className="share-user__avatar" />
                    <div className="share-user__name">Andrew Mikawa</div>
                    <div className="share-user__check">
                        <label>
                            <input className="share-user__check-box" type="checkbox" />
                            <span className="share-user__check-box-span"></span>
                        </label>
                    </div>
                </div>
                <div className="share-user">
                    <img src={userTwo} alt="" className="share-user__avatar" />
                    <div className="share-user__name">Anna Dyda</div>
                    <div className="share-user__check">
                        <label>
                            <input className="share-user__check-box" type="checkbox" />
                            <span className="share-user__check-box-span"></span>
                        </label>
                    </div>
                </div>
                <div className="share-user">
                    <img src={userThree} alt="" className="share-user__avatar" />
                    <div className="share-user__name">Maria Voloshyn</div>
                    <div className="share-user__check">
                        <label>
                            <input className="share-user__check-box" type="checkbox" />
                            <span className="share-user__check-box-span"></span>
                        </label>
                    </div>
                </div>
                <div className="share-user">
                    <img src={userFour} alt="" className="share-user__avatar" />
                    <div className="share-user__name">Martin Beckerman</div>
                    <div className="share-user__check">
                        <label>
                            <input className="share-user__check-box" type="checkbox" />
                            <span className="share-user__check-box-span"></span>
                        </label>
                    </div>
                </div>
                <button className="share-btn">Share</button>
            </div>

        </div>
    )
}

export default Share
