import { Link } from "react-router-dom";

import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";

export default function RecipeFavListItem(recipe) {
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
            </div>
        </div>
    );
}