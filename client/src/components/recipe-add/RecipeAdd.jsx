import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";

const formInitialState = {
    name: '',
    imageUrl: '',
    ingredients: '',
    steps: '',
};

export default function RecipeAdd() {
    const [formValues, setFormValues] = useState(formInitialState);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    
    const resetFormHandler = () => {
        setFormValues(formInitialState);
    };

    const addRecipeSubmitHandler = async (e) => {
        e.preventDefault();

        // const recipeData = Object.fromEntries(new FormData(e.currentTarget));
        
        try {
            await recipeService.add(formValues);

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
                            <label htmlFor="name" className="required">Recipe title</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formValues.name}
                                onChange={changeHandler}
                                placeholder="Recipe title"
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="imageUrl" className="required">Image link</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                value={formValues.imageUrl}
                                onChange={changeHandler}
                                placeholder="Image link"
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="ingredients" className="required">Ingredients</label>
                            <textarea
                                id="ingredients"
                                name="ingredients"
                                rows="7"
                                value={formValues.ingredients}
                                onChange={changeHandler}
                                placeholder="Ingredients..."
                                required>
                            </textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="steps" className="required">Steps</label>
                            <textarea
                                id="steps"
                                name="steps"
                                rows="7"
                                value={formValues.steps}
                                onChange={changeHandler}
                                placeholder="Steps..."
                                required>
                            </textarea>
                        </div>

                        <div>
                            <input className="button sbm-btn" type="submit" value="Add recipe" />
                        </div>

                    </fieldset>
                </form>

            </section>

        </div>
    );
}