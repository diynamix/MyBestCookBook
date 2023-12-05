import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../../contexts/authContext";

export default function RecipeListItem(recipe) {
    const { userId } = useContext(AuthContext);

    const isUserOwner = userId === recipe['_ownerId'];

    return (
        <div className="recipe-box">
            <div className="recipe-img-container">
                <Link to={`/recipes/${recipe['_id']}`}>
                    <img src={recipe.imageUrl} />
                </Link>
            </div>
            <div className="recipe-info">
                <div className="recipe-name">
                    <Link to={`/recipes/${recipe['_id']}`}>{recipe.name}</Link>
                </div>
                <div className="recipe-rate">
                    {(userId && !isUserOwner)
                        ? <button className="btn-unset"><i className="fas fa-heart"></i> 99</button>
                        : <><i className="fas fa-heart"></i> 99</>
                    }
                </div>
                <div className="recipe-creator">
                    {(isUserOwner)
                        ? <><Link to={`/recipes/my`}>My recipes</Link></>
                        : <>By <Link to={`/recipes/${recipe['_id']}`}>{recipe.owner.username}</Link></>
                    }
                </div>
            </div>
        </div>
    );
}