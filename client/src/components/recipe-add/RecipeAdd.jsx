import { useNavigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";

export default function RecipeAdd() {
    const navigate = useNavigate();

    const addRecipeSubmitHandler = async (e) => {
        e.preventDefault();

        const recipeData = Object.fromEntries(new FormData(e.currentTarget));
        
        try {
            await recipeService.add(recipeData);

            navigate('/recipes');
        } catch (error) {
            // Notification
            console.log(error);
        }
    }

    return (
        <div className="content-wrap add-recipe">
            <h2 className="page-title divider">Add</h2>

            <section className="form-section">

                <form className="recipe-form" onSubmit={addRecipeSubmitHandler}>
                    <fieldset>
                        <legend>Add Recipe</legend>

                        <div className="form-group">
                            <label htmlFor="title" className="required">Recipe name</label>
                            <input type="text" id="title" name="title" placeholder="Recipe title" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="imageUrl" className="required">Image link</label>
                            <input type="text" id="imageUrl" name="imageUrl" placeholder="Image link" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="ingredients" className="required">Ingredients</label>
                            <textarea id="ingredients" name="ingredients" placeholder="Ingredients..." required></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="steps" className="required">Description</label>
                            <textarea id="steps" name="steps" placeholder="Description..." required></textarea>
                        </div>

                        <div>
                            <input className="sbm-btn" type="submit" value="Add recipe" />
                        </div>

                    </fieldset>
                </form>

            </section>

        </div>
    );
}