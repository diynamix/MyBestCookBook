import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";

export default function RecipeListItem(recipe) {
    const { userId } = useContext(AuthContext);

    const isOwner = userId === recipe['_ownerId'];

    return (
        <div className="recipe-box">
            <div className="recipe-img-container">
                <Link to={pathToUrl(Path.RecipeDetails, { recipeId: recipe._id, })}>
                    <img src={recipe.imageUrl} />
                </Link>
            </div>
            <div className="recipe-info">
                <div className="recipe-name">
                    <Link to={pathToUrl(Path.RecipeDetails, { recipeId: recipe._id, })}>{recipe.name}</Link>
                </div>
                {/* <div className="recipe-like">
                    {(userId && !isUserOwner)
                        ? <form onSubmit={likeHandler}>
                            <button
                                type="submit"
                                className="btn-unset">
                                    <i className="fas fa-heart"></i> 99
                            </button>
                        </form> 
                        : <><i className="fas fa-heart"></i> 99</>
                    }
                </div> */}
                <div className="recipe-creator">
                    {(isOwner)
                        ? <><Link to={Path.RecipeListMy}>My recipes</Link></>
                        : <>
                            By <Link
                                to={pathToUrl(Path.RecipeListByUser, { ownerId: recipe._ownerId})}
                                state={{ ownerId: recipe._ownerId, ownerName: recipe?.owner?.username }}>
                                    {recipe?.owner?.username}
                                </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}