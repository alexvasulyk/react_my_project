import React, { useState } from 'react';
import './Profile_Editor.scss'


function Index() {

    const [stringlength, setStringLength] = useState(false);

    const changeInput = (e: any) => {
        if (((e.target.value).length) >= 6) {
            setStringLength(true)
        } else {
            setStringLength(false)
        }
    }
    return (
        <div className="profile-editor">
            <div className="profile-editor_group">
                <label htmlFor="name">Nickname</label>
                <input type="text" name="name" onChange={changeInput} />
                {stringlength && <span className='yes'></span>}
                {!stringlength && <span className='no'></span>}
            </div>
            <div className="profile-editor_group">
                <label htmlFor="name">First Name</label>
                <input type="text" name="name" />
            </div>
            <div className="profile-editor_group">
                <label htmlFor="name">Second Name</label>
                <input type="text" name="name" />
            </div>
            <div className="profile-editor_group">
                <label htmlFor="name">Job Title</label>
                <input type="text" name="name" />
            </div>
            <div className="profile-editor_group">
                <label htmlFor="name">Description</label>
                <input type="text" name="name" className="mh" />
            </div>
            <button className="profile-editor__btn-s" >Save</button>
            <button className="profile-editor__btn-c">Cancel</button>

        </div>
    )
}

export default Index;
