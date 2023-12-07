import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as recipeService from '../../services/recipeService';
import * as likeService from '../../services/likeService';
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";

export default function RecipeDetails() {
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState({});
    
    const [likes, setLikes] = useState(0);
    const [likeId, setLikeId] = useState('');
    
    const { recipeId } = useParams();
    const {userId} = useContext(AuthContext);

    const isOwner = userId === recipe._ownerId;

    useEffect(() => {
        recipeService.getByRecipeId(recipeId)
        .then(setRecipe);
        
        likeService.getAllLikesByRecipeId(recipeId)
        .then(setLikes);
        
        likeService.getLikeId(userId, recipeId)
            .then(setLikeId);
    }, [recipeId]);
        
    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${recipe.name}`);

        if (hasConfirmed) {
            await recipeService.remove(recipeId);

            navigate(Path.RecipeList);
        }
    }
    
    const likeHandler = async (e) => {
        e.preventDefault();

        if (!userId || isOwner) return;

        try {
            if (!likeId) {
                await likeService.like(recipeId);
            } else {
                await likeService.unlike(likeId);
            }

            setLikeId(await likeService.getLikeId(userId, recipeId));

            setLikes(await likeService.getAllLikesByRecipeId(recipeId));
        } catch (err) {
            console.log(err);
        }
    };

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
                    <div className="recipe-details-like-creator">
                        <div className="recipe-like recipe-details-like">
                            {(userId && !isOwner)
                                ? <button
                                    type="submit"
                                    onClick={likeHandler}
                                    className={likeId ? 'liked btn-unset' : 'btn-unset'}>
                                        <i className="fas fa-heart"></i> {likes}
                                </button>
                                : <><i className="fas fa-heart"></i> {likes}</>
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
                            <button onClick={deleteButtonClickHandler} className="delete-btn danger-btn button">Delete</button>
                        </div>
                    )}
                </div>
            </div>

            <Link to={Path.RecipeList} className="link">All recipes</Link>
        </div>
    );
};