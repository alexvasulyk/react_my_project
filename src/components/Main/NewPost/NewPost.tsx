import './NewPost.scss'
import IMG from './img/choose.png'
interface dateInput{
    btn:any;
}
function NewPost({btn}:dateInput) {
    return (
        <div className="modal-newPost">
            <div className="newPost">
            <div className="newPost__wrapper">
                <img src={IMG} alt="" />
                <label htmlFor="description">Description</label>
                <form className="inputt">
                <input type="text" placeholder='Description...' />
                </form>
                
                <div className="newPost__btn">
                    <button onClick={btn} className="newPost__btn-cancel">Cancel</button>
                    <button className="newPost__btn-post">Post</button>
                </div>
            </div>
        </div>

        
        </div>
    )
}

export default NewPost
