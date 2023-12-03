import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";

const formInitialState = {
    name: '',
    imageUrl: '',
    ingredients: '',
    steps: '',
};

const IputLengthRequirements = {
    nameMinLength: 2,
    nameMaxLength: 30,
    imageUrlMinLength: 10,
    imageUrlMaxLength: 2048,
    ingredientsMinLength: 10,
    ingredientsMaxLength: 1000,
    stepsMinLength: 10,
    stepsMaxLength: 5000,
};

export default function RecipeAdd() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState(formInitialState);

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const addRecipeSubmitHandler = async (e) => {
        e.preventDefault();

        if (!(errors.name === '' && errors.imageUrl === ''
            && errors.ingredients === '' && errors.steps === '')) {
            return;
        }
        
        try {
            await recipeService.add(formValues);
            navigate('/recipes');
        } catch (error) {
            // Notification
            console.log(error);
        }
    }

    // const resetFormHandler = () => {
    //     setFormValues(formInitialState);
    // };

    const validationHandler = async (e) => {
        const inputTitle = e.target.name;
        const inputTitleMinLength = IputLengthRequirements[`${inputTitle}MinLength`];
        const inputTitleMaxLength = IputLengthRequirements[`${inputTitle}MaxLength`];
        
        setErrors(state => ({
            ...state,
            [inputTitle]:
            (formValues[inputTitle].length < inputTitleMinLength
                || formValues[inputTitle].length > inputTitleMaxLength)
                ? `The field must be between ${inputTitleMinLength} and ${inputTitleMaxLength} characters!`
                : '',
        }));

        console.log(formInitialState === errors);
    };
    
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
                                placeholder="Recipe title"
                                value={formValues.name}
                                minLength={IputLengthRequirements.nameMinLength}
                                maxLength={IputLengthRequirements.nameMaxLength}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                className={errors.name && 'validation-error-field'}
                                required />
                            <span className="validation-span">{errors.name}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="imageUrl" className="required">Image link</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Image link"
                                value={formValues.imageUrl}
                                minLength={IputLengthRequirements.imageUrlMinLength}
                                maxLength={IputLengthRequirements.imageUrlMaxLength}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                className={errors.imageUrl && 'validation-error-field'}
                                required />
                            <span className="validation-span">{errors.imageUrl}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ingredients" className="required">Ingredients</label>
                            <textarea
                                id="ingredients"
                                name="ingredients"
                                rows="7"
                                placeholder="Ingredients..."
                                value={formValues.ingredients}
                                minLength={IputLengthRequirements.ingredientsMinLength}
                                maxLength={IputLengthRequirements.ingredientsMaxLength}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                className={errors.ingredients && 'validation-error-field'}
                                required>
                            </textarea>
                            <span className="validation-span">{errors.ingredients}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="steps" className="required">Steps</label>
                            <textarea
                                id="steps"
                                name="steps"
                                rows="7"
                                placeholder="Steps..."
                                value={formValues.steps}
                                minLength={IputLengthRequirements.stepsMinLength}
                                maxLength={IputLengthRequirements.stepsMaxLength}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                className={errors.steps && 'validation-error-field'}
                                required>
                            </textarea>
                            <span className="validation-span">{errors.steps}</span>
                        </div>

                        <div>
                            <button type="submit" className="button sbm-btn">Add recipe</button>
                            {/* <button type="button" onClick={resetFormHandler} className="button sbm-btn">Reset</button> */}
                        </div>

                    </fieldset>
                </form>

            </section>

        </div>
    );
}