import IMG from './img/log1.png'
import IMG2 from './img/log2.png'
import './Comment.scss'
function Comment() {
    return (
        <div className="main-comment">
            <div className="main-comment__wrapper">
                <img className="logo-user" src={IMG} alt="" />
                <div className="main-comment__inform">
                    <p className="main-comment__inform-name">Andrew Mikawa</p>
                    <span className="main-comment__inform-just">Just now</span>
                    <p className="main-comment__inform-description">Pretty cool photos, I left you a message in private messages, waiting for a response)</p>
                </div>
                <div className="like">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.25" clip-path="url(#clip0_645:3180)">
                            <path d="M16 9L13.4343 7.02642C9.17158 3.74737 3 6.78626 3 12.1643C3 14.6203 3.97562 16.9756 5.71224 18.7122L14.2929 27.2929C14.7456 27.7456 15.3597 28 16 28C16.6403 28 17.2544 27.7456 17.7071 27.2929L26.2878 18.7122C28.0244 16.9756 29 14.6203 29 12.1643C29 6.78626 22.8284 3.74737 18.5657 7.02642L16 9Z" fill="#010101" />
                        </g>
                        <defs>
                            <clipPath id="clip0_645:3180">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
            <div className="main-comment__wrapper">
                <img className="logo-user" src={IMG2} alt="" />
                <div className="main-comment__inform">
                    <p className="main-comment__inform-name">Anna Dyda</p>
                    <span className="main-comment__inform-just">3 min</span>
                    <p className="main-comment__inform-description">Cool image  👏great shot👍📷</p>
                </div>
                <div className="like">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.25" clip-path="url(#clip0_645:3180)">
                            <path d="M16 9L13.4343 7.02642C9.17158 3.74737 3 6.78626 3 12.1643C3 14.6203 3.97562 16.9756 5.71224 18.7122L14.2929 27.2929C14.7456 27.7456 15.3597 28 16 28C16.6403 28 17.2544 27.7456 17.7071 27.2929L26.2878 18.7122C28.0244 16.9756 29 14.6203 29 12.1643C29 6.78626 22.8284 3.74737 18.5657 7.02642L16 9Z" fill="#010101" />
                        </g>
                        <defs>
                            <clipPath id="clip0_645:3180">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Comment
