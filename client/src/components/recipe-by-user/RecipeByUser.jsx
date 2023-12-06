import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";

import RecipeListItem from "../recipe-list-item/RecipeListItem";

export default function RecipeByUser() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const location = useLocation();
    const {ownerId, ownerName} = location.state;

    useEffect(() => {
        recipeService.getAllByUserId(ownerId)
            .then(result => setRecipes(result));
            // if (!ownerId) navigate('/recipes');
    }, []);

    return (
        <div className="content-wrap">
            <h2 className="divider">{ownerName}'s Recipes</h2>

            <section className="recipe-list">

                {recipes.map(recipe => (
                    <RecipeListItem key={recipe._id} {...recipe} />
                ))}

                {recipes.length === 0 &&
                    <div>
                        <p>You haven't uploaded any recipes yet!</p>
                    </div>
                }

            </section>
        </div>
    );
}