import React, { useState } from 'react';
import './Modal.scss'
import Img1 from './img/1.png'
import Img2 from './img/2.png'
import Img3 from './img/3.png'
import Cross from './img/cross.svg'
import Img_like from './img/like.svg'

interface ImgProps {
    img: string;
    avatar: string;
    mylike: number;
    btn:any;
}

function ModalPost({ img, avatar, mylike,btn}: ImgProps) {
    const [count, SetCount] = useState(mylike);
    
    return (
        <div className='Modal'>
            <div className="wrapper">
                <img className='img-post' src={img} alt="" />
                <div className="wrapper-mobile">
                    <div className="wrapper-mobile__text">
                        <label htmlFor="description">Description</label>
                        <input type="text"  />
                    </div>
                    <button className="wrapper-mobile__btn-p">Publisher</button>
                    <button className="wrapper-mobile__btn-c">Cancel</button>
                </div>
                <div className="content">
                    <div className="content-header">
                        <img src={avatar} alt="" />
                        <span >Nettle Fernandez</span>
                        <button onClick={btn}><img src={Cross}  alt="" /></button>
                    </div>
                    <div className="content-bottom">
                        <div className="content-comment">
                            <img src={Img1} alt="" />
                            <div className="content-comment__text">
                                <span className='content-comment__text-main'>Cool image  👏great shot👍📷</span>
                                <span className='content-comment__text-time'>12 min</span>
                            </div>
                        </div>
                        <div className="content-comment">
                            <img src={Img2} alt="" />
                            <div className="content-comment__text">
                                <span className='content-comment__text-main'>Pretty cool photos, I left you a message
                                    in private messages, waiting for
                                    a response)</span>
                                <span className='content-comment__text-time'>12 min</span>
                            </div>
                        </div>
                        <div className="content-comment">
                            <img src={Img3} alt="" />
                            <div className="content-comment__text">
                                <span className='content-comment__text-main'>Nice!</span>
                                <span className='content-comment__text-time'>12 min</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-like">
                        <button className='img-counter' onClick={() => { SetCount(count + 1) }}><img src={Img_like} alt="" /></button>
                        <span className="counter">{count}</span>
                    </div>
                    <div className="content-com">
                        <input type="text" placeholder='Add a comment...' />
                        <a href="">Post</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPost;
