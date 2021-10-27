import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'
import './Main.scss';
import Img from './img/1.png';
import Img_post from './img/2.png';
import Img_like from './img/like.svg';
import Img_active from "./img/icon.png"
import Img_comment from './img/comment.svg';
import dots from './img/dots.svg';
import arrow from './img/arrow.svg';
import Modal from './ModalPost/ModalPost';
import Share from './Share/Share';

interface LikeProps {
    like: number;
    comment: number;
}

const Index = ({ like, comment }: LikeProps) => {
    const [count, SetCount] = useState(like);
    const [openModal, openstModal] = useState(false)
    const opModal = () => {
        openstModal(true)
    }
    const clModal = () => {
        openstModal(false)
    }
    const [animation, setAnimation] = useState(false)
    const [share, setShare] = useState(false);
    const [likes, setLikes] = useState(false);
    const countChange = () => {
        if (count == like) {
            SetCount(count + 1)
            setLikes(true)

        } else {
            SetCount(count - 1);
            setLikes(false)
        }
    }
    const useAnimation = (() => {
        if (window.innerWidth > 576) {
            setAnimation(true)
            setTimeout(() => setAnimation(false), 3000)
        }
        else {
            setShare(true)
        }
    })

    return (
        <div>
            {openModal ? <Modal img={Img_post} avatar={Img} mylike={count} btn={clModal} /> : null}
            {share ? <Share /> : null}
            <div>
                <div>
                    <div className='main'>
                        <div className="main-header">
                            <img src={Img} alt="" />
                            <div className="main-header__text">
                                <span className='main-header__text-name'>Nettie Fernandez</span>
                                <span className='main-header__text-text'>Just now</span>
                            </div>
                            <button className='menu-dots'>
                                <img src={dots} alt="" />

                            </button>
                        </div>
                        <div className="main__post-img">
                            <Link to="/post"><img src={Img_post} alt="" className='post-img' /></Link>
                            <CSSTransition in={animation} timeout={400} classNames="animation-bufer" unmountOnExit >
                                <div className="animation" >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_656:3705)">
                                            <path d="M12.5737 14.8688L10.2787 17.164C10.2787 17.164 10.2787 17.164 10.2786 17.164C10.2786 17.164 10.2786 17.1641 10.2785 17.1641C9.32947 18.1132 7.7851 18.1133 6.83591 17.1641C6.37609 16.7043 6.12291 16.0929 6.12291 15.4427C6.12291 14.7926 6.37609 14.1813 6.83575 13.7215C6.83581 13.7214 6.83586 13.7214 6.83591 13.7213L9.13099 11.4262C9.44783 11.1093 9.44783 10.5955 9.13093 10.2787C8.81408 9.9618 8.30027 9.9618 7.98337 10.2787L5.6883 12.5738C5.68814 12.5739 5.68797 12.5742 5.68781 12.5743C4.92185 13.3405 4.5 14.3593 4.5 15.4427C4.5 16.5264 4.92201 17.5453 5.68835 18.3116C6.47936 19.1026 7.5183 19.4981 8.55729 19.4981C9.59627 19.4981 10.6353 19.1026 11.4262 18.3116V18.3116C11.4262 18.3116 11.4262 18.3115 11.4262 18.3115L13.7213 16.0164C14.0381 15.6996 14.0381 15.1857 13.7212 14.8688C13.4044 14.552 12.8907 14.552 12.5737 14.8688Z" fill="#010101" />
                                            <path d="M19.5001 8.5573C19.5001 7.47357 19.0781 6.4547 18.3117 5.68836C16.7298 4.10646 14.1558 4.10651 12.5739 5.68836C12.5739 5.68847 12.5738 5.68853 12.5737 5.68863L10.2787 7.9836C9.96179 8.30044 9.96179 8.81431 10.2787 9.13116C10.4372 9.28966 10.6448 9.36886 10.8525 9.36886C11.0601 9.36886 11.2679 9.28961 11.4263 9.13116L13.7213 6.8362C13.7213 6.83609 13.7214 6.83604 13.7215 6.83593C14.6706 5.88685 16.215 5.88679 17.1642 6.83593C17.6239 7.29575 17.8772 7.9071 17.8772 8.5573C17.8772 9.20744 17.6241 9.81868 17.1643 10.2785C17.1643 10.2786 17.1642 10.2786 17.1642 10.2787L14.8691 12.5738C14.5523 12.8906 14.5523 13.4045 14.8692 13.7214C15.0276 13.8798 15.2353 13.9591 15.4429 13.9591C15.6506 13.9591 15.8583 13.8798 16.0167 13.7214L18.3118 11.4262C18.312 11.4261 18.3121 11.4259 18.3123 11.4257C19.0782 10.6595 19.5001 9.64076 19.5001 8.5573Z" fill="#010101" />
                                            <path d="M9.13123 14.8688C9.28968 15.0272 9.49736 15.1065 9.70498 15.1065C9.91266 15.1065 10.1203 15.0272 10.2788 14.8688L14.869 10.2785C15.1859 9.96166 15.1859 9.44785 14.869 9.13095C14.5522 8.8141 14.0384 8.8141 13.7215 9.13095L9.13123 13.7211C8.81433 14.0381 8.81433 14.5519 9.13123 14.8688Z" fill="#010101" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_656:3705">
                                                <rect width="15" height="15" fill="white" transform="translate(4.5 4.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Copied to bufer</div>
                            </CSSTransition>

                        </div>

                        <p className="main-desc">
                            TB to New York October 2018.<br />
                            "You shouldn't wait for other people to make special things happen. You have to create your own memories." Heidi Klum
                        </p>
                        {share ? <Share /> : null}
                        <div className="main-inter">
                            <button className='img-counter' onClick={countChange}><CSSTransition in={likes} timeout={100} classNames="animation-liker" unmountOnEntering>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4138:2045)">
                                        <path d="M12 6.75L10.0758 5.26982C6.87868 2.81053 2.25 5.0897 2.25 9.12323C2.25 10.9652 2.98172 12.7317 4.28418 14.0342L10.7197 20.4697C11.0592 20.8092 11.5198 21 12 21C12.4802 21 12.9408 20.8092 13.2803 20.4697L19.7158 14.0342C21.0183 12.7317 21.75 10.9652 21.75 9.12323C21.75 5.0897 17.1213 2.81053 13.9242 5.26982L12 6.75Z" fill="#C9CAD1" />
                                    </g>

                                </svg>
                            </CSSTransition>
                            </button>
                            <span className="counter">{count}</span>
                            <button className='img-counter' onClick={opModal}><img src={Img_comment} alt="" /></button>
                            <span className="counter" >{comment}</span>

                            <button className="btn_share" onClick={useAnimation}>Share<img src={arrow} alt="" /></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;