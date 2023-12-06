import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as recipeService from '../../services/recipeService';
// import * as likeService from '../../services/likeService';
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState({});
    // const [likes, setLikes] = useState(0);
    const { recipeId } = useParams();
    const {userId} = useContext(AuthContext);
    const isOwner = userId === recipe._ownerId;
    
    useEffect(() => {
        recipeService.getByRecipeId(recipeId)
            .then(setRecipe);

        // likeService.allLikesByRecipeId(recipeId)
        //     .then(setLikes);
    }, [recipeId]);

    // let isLiked = likeService.isLikedByUser(userId, recipeId);
    
    // const likeHandler = async (e) => {
    //     e.preventDefault();

    //     if (!userId || isUserOwner) return;

    //     try {
    //         const newLike = await likeService.like(recipeId);

    //         const allLikes = await likeService.allLikesByRecipeId(recipeId);

    //         setLikes(likes => allLikes);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return(
        <div className="content-wrap recipe-details">
            <div className="recipe-details-links">
                <Link to={Path.RecipeList} className="link">All recipes</Link>
                {!isOwner && (
                    <Link
                        to={pathToUrl(Path.RecipeListByUser, { ownerId: recipe._ownerId})}
                        state={{ ownerId: recipe._ownerId, ownerName: recipe?.owner?.username }}
                        className="author-link">
                            Authors's recipes
                    </Link>                    
                )}
            </div>

            <h2 className="page-title divider">{recipe.name}</h2>

            <div className="recipe-details-box">
                <div className="recipe-details-img-container">
                    <img src={recipe.imageUrl} alt="recipe Image" />
                </div>
                <div className="recipe-details-info">
                    <div className="recipe-details-name">
                        {recipe.name}
                    </div>
                    <div className="recipe-details-rate-creator">
                        <div className="recipe-rate recipe-details-rate">
                            {(userId && !isOwner)
                                ? <form>
                                    <button
                                        type="submit"
                                        className="btn-unset">
                                            <i className="fas fa-heart"></i> {99}
                                    </button>
                                </form> 
                                : <><i className="fas fa-heart"></i> {99}</>
                            }
                        </div>
                        <div className="recipe-creator recipe-details-creator">
                            {(isOwner)
                                ? <><Link to={Path.RecipeListMy}>My other recipes</Link></>
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
                    <div className="recipe-details-ingredients">
                        Ingredients:
                        <br />
                        {recipe.ingredients}
                    </div>
                    <div className="recipe-details-steps">
                        Steps:
                        <br />
                        {recipe.steps}
                    </div>
                    {isOwner && (
                        <div className="recipe-details-btns">
                            <Link to={pathToUrl(Path.RecipeEdit, {recipeId})} className="edit-btn green-btn button">Edit</Link>
                            <Link to="" className="delete-btn danger-btn button">Delete</Link>
                        </div>
                    )}
                </div>
            </div>

            <Link to={Path.RecipeList} className="link">All recipes</Link>
        </div>
    );
};