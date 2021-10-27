import Main from '../index'
import Comment from '../Comment/Comment'
import './Post.scss';


function Post() {
    return (
        <div className="main-post-wrapper">
            <Main like={439} comment={34} />
            <div className="main-post-comment">
                <Comment />
            </div>
        </div>
    )
}

export default Post
