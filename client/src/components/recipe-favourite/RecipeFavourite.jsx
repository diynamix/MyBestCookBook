import { useContext, useEffect, useState } from "react";

import * as recipeService from "../../services/recipeService";
import AuthContext from "../../contexts/authContext";

import RecipeListItem from "../recipe-list-item/RecipeListItem";

export default function RecipeFavourite() {
    const [recipes, setRecipes] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        recipeService.getFavourite(userId)
            .then(result => setRecipes(result));
    }, []);

    return (
        <div className="content-wrap">
            <h2 className="divider">My Favourite</h2>

            <section className="recipe-list">

                {recipes.map(recipe => (
                    <RecipeListItem key={recipe._id} {...recipe} />
                ))}

                {recipes.length === 0 &&
                    <div>
                        <p>You haven't added any favourite recipes yet.</p>
                    </div>
                }

            </section>
        </div>
    );
}