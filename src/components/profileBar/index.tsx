import React, { Dispatch, SetStateAction, useState } from 'react';
import './Profile.scss'
import avatar from './img/Avatar.png';
import cross from './img/cross.png';
import { Link } from 'react-router-dom';
import ProfileInfo from '../MyProfile/ProfileInfo'
import NewPost from '../Main/NewPost/NewPost'

const Index = () => {
    const [stateProfileInfo, activeProfileInfo] = useState(false)
    const [newPost, activeNewPost] = useState(false);
    const closedProfile = () => {
        activeProfileInfo(false);
        activeNewPost(false);
    }
    return (
        <div className='profile'>
            {stateProfileInfo ? <ProfileInfo btn={closedProfile} /> : null}
            {newPost ? <NewPost btn={closedProfile} /> : null}
            <div className="top-bar">
                <div className="top-bar__followers">
                    <span className='counter'>1,1 K</span>
                    <span className='text'>Followers</span>
                </div>

                <button className='btn-avatar' onClick={() => { activeProfileInfo(true) }}>
                    <img src={avatar} alt="" className='avatar-logo' />
                    <img src={cross} alt="" className='cross-add' />
                </button>

                <div className="top-bar__following">
                    <span className='counter'>448</span>
                    <span className='text'>Following</span>
                </div>
            </div>
            <p className='profile-name'>
                Alexandr Sokolov
                <span className='dash'>-</span>
                <span className='profile-name__work'>Photographer</span>
            </p>
            <p className="profile-description">Like to travel and shoot cinematic and b/w photos
                Tools - Capture One for Raw</p>
            <div className="profile-btn">
                <Link to='/profile_editor'><button className='profile-btn__edit'>Edit profile</button></Link>
                <button onClick={() => { activeNewPost(true) }} className='profile-btn__new-post'>New post</button>
            </div>

        </div>
    )
}

export default Index;