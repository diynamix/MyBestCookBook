import { useEffect, useState } from "react";

import * as recipeService from "../../services/recipeService";
import RecipeListItem from "./recipe-list-item/RecipeListItem";

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => setRecipes(result));
    }, []);

    console.log(recipes);

    return (
        <div className="content-wrap">
            <h2 className="divider">Recipes</h2>

            <section className="recipe-list">

                {recipes.map(recipe => (
                    <RecipeListItem key={recipe._id} {...recipe} />
                ))}

                {recipes.length === 0 &&
                    <div>
                        <h3>Welcome to the Recipes page!</h3>
                        <p>There are no recipes found.</p>
                        <p>Please try again later.</p>
                    </div>
                }

            </section>
        </div>
    );
}