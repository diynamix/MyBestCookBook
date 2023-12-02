export default function RecipeListItem({
    title,
    imageUrl,
    likes
}) {
    return (
        <div className="recipe-box">
            <div className="recipe-img">
                <a href="#">
                    <img src={imageUrl} />
                </a>
            </div>
            <div className="recipe-info">
                <div className="recipe-name">
                    <a href="#">
                        {title}
                    </a>
                </div>
                <div className="recipe-rate">
                    <button className="btn-unset"><i className="fas fa-heart"></i> {likes}</button>
                </div>
            </div>
            <div className="recipe-btns user">
                <button className="view-btn">View</button>
            </div>
            {/* <div className="recipe-btns admin">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div> */}
        </div>
    );
}