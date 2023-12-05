import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";
import AuthContext from "../../contexts/authContext";

import RecipeListItem from "../recipe-list-item/RecipeListItem";

export default function RecipeMy() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const { userId, username } = useContext(AuthContext);

    useEffect(() => {
        recipeService.getAllByUserId(userId)
            .then(result => setRecipes(result));
            if (!userId) navigate('/recipes'); 
    }, []);


    return (
        <div className="content-wrap">
            <h2 className="divider">{username}'s Recipes</h2>

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