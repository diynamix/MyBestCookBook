import { Link } from "react-router-dom";

export default function RecipeListItem({
    _id,
    name,
    imageUrl,
    username,
    likes
}) {
    return (
        <div className="recipe-box">
            <div className="recipe-img">
                <Link to={`/recipes/${_id}`}>
                    <img src={imageUrl} />
                </Link>
            </div>
            <div className="recipe-info">
                <div className="recipe-name">
                    <Link to={`/recipes/${_id}`}>{name}</Link>
                </div>
                {/* <div className="recipe-rate">
                    <button className="btn-unset"><i className="fas fa-heart"></i> {likes}</button>
                </div> */}
                <div className="recipe-creator">
                    By <Link to={`/recipes/${_id}`}>{username}</Link>
                </div>
            </div>
        </div>
    );
}