import { Link } from "react-router-dom";

export default function RecipeListItem({
    _id,
    name,
    imageUrl,
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
                <div className="recipe-rate">
                    <button className="btn-unset"><i className="fas fa-heart"></i> {likes}</button>
                </div>
            </div>
            <div className="recipe-btns user">
                <Link to={`/recipes/${_id}`} className="view-btn button">View</Link>
            </div>
            <div className="recipe-btns admin">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>
        </div>
    );
}