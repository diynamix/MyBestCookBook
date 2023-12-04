import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as recipeService from '../../services/recipeService';

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState({});

    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getById(recipeId)
            .then(setRecipe);
    }, [recipeId]);

    // if (recipe.ingredients) {
    //     console.log(recipe.ingredients.split('\n').join('\n'));
    // }

    return(
        <div className="content-wrap recipe-details">
            <Link to='/recipes' className="link">&lt;&lt;Back</Link>

            <h2 className="page-title divider">{recipe.name}</h2>

            <div className="recipe-details-box">
                <div className="recipe-details-img">
                    <img src={recipe.imageUrl} alt="recipe Image" />
                </div>
                <div className="recipe-details-info">
                    <div className="recipe-details-name">
                        {recipe.name}
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
                    <div className="recipe-details-btns">
                        <a className="edit-btn green-btn button">Edit</a>
                        <a className="delete-btn danger-btn button">Delete</a>
                        
                        {/* <form method="post">
                            <input type="submit" value="Remove from Wishlist" className="wishlist-btn danger-btn button" />
                        </form>
                            
                        <input type="submit" value="Added to basket" className="wishlist-btn green-btn-disabled button" disabled="disabled" />
                        
                        <form method="post">
                            <input type="submit" value="Add to wishlist" className="wishlist-btn green-btn button" />
                        </form> */}
                    </div>
                </div>
            </div>

            <Link to='/recipes' className="link">&lt;&lt;Back</Link>
        </div>
    );
};