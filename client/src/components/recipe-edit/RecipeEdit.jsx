import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as recipeService from "../../services/recipeService";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

const FormKeys = {
    Name: 'name',
    ImageUrl: 'imageUrl',
    Ingredients: 'ingredients',
    Steps: 'steps',
};

const FormInitialState = {
    [FormKeys.Name]: '',
    [FormKeys.ImageUrl]: '',
    [FormKeys.Ingredients]: '',
    [FormKeys.Steps]: '',
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

export default function RecipeEdit() {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(FormInitialState);
    const [errors, setErrors] = useState(FormInitialState);

    
    useEffect(() => {
        recipeService.getByRecipeId(recipeId)
            .then(result => {
                setRecipe(result);
            });
        }, [recipeId]);
        
        const changeHandler = (e) => {
            setRecipe(state => ({
                ...state,
                [e.target.name]: e.target.value,
            }));
        };
        
        const editRecipeSubmitHandler = async (e) => {
            e.preventDefault();

        if (!(errors[FormKeys.Name] === ''
        && errors[FormKeys.ImageUrl] === ''
        && errors[FormKeys.Ingredients] === ''
        && errors[FormKeys.Steps] === '')) {
            return;
        }
        
        try {
            await recipeService.edit(recipeId, recipe);
            
            navigate(pathToUrl(Path.RecipeDetails, { recipeId }));
        } catch (error) {
            alert('Error. Please try again.');
        }
    }
    
    // const resetFormHandler = () => {
        //     setRecipe(formInitialState);
        // };
        
    const validationHandler = async (e) => {
        const inputTitle = e.target.name;
        const inputTitleMinLength = IputLengthRequirements[`${inputTitle}MinLength`];
        const inputTitleMaxLength = IputLengthRequirements[`${inputTitle}MaxLength`];
        
        setErrors(state => ({
            ...state,
            [inputTitle]:
            (recipe[inputTitle].length < inputTitleMinLength
                || recipe[inputTitle].length > inputTitleMaxLength)
                ? `The field must be between ${inputTitleMinLength} and ${inputTitleMaxLength} characters!`
                : '',
        }));
    };
    
    return (
        <div className="content-wrap add-recipe">
            <h2 className="page-title divider">{recipe[FormKeys.Name]}</h2>

            <section className="form-section">

                <form className="recipe-form" onSubmit={editRecipeSubmitHandler}>
                    <fieldset>
                        <legend>Edit Recipe</legend>

                        <div className="form-group">
                            <label htmlFor={[FormKeys.Name]} className="required">Recipe title</label>
                            <input
                                type="text"
                                id="name"
                                name={FormKeys.Name}
                                placeholder="Recipe title"
                                value={recipe[FormKeys.Name]}
                                minLength={IputLengthRequirements.nameMinLength}
                                maxLength={IputLengthRequirements.nameMaxLength}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                className={errors[FormKeys.Name] && 'validation-error-field'}
                                required />
                            <span className="validation-span">{errors[FormKeys.Name]}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor={[FormKeys.ImageUrl]} className="required">Image link</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name={[FormKeys.ImageUrl]}
                                placeholder="Image link"
                                value={recipe[FormKeys.ImageUrl]}
                                minLength={IputLengthRequirements.imageUrlMinLength}
                                maxLength={IputLengthRequirements.imageUrlMaxLength}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                className={errors[FormKeys.ImageUrl] && 'validation-error-field'}
                                required />
                            <span className="validation-span">{errors[FormKeys.ImageUrl]}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor={[FormKeys.Ingredients]} className="required">Ingredients</label>
                            <textarea
                                id="ingredients"
                                name={[FormKeys.Ingredients]}
                                rows="7"
                                placeholder="Ingredients..."
                                value={recipe[FormKeys.Ingredients]}
                                minLength={IputLengthRequirements.ingredientsMinLength}
                                maxLength={IputLengthRequirements.ingredientsMaxLength}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                className={errors[FormKeys.Ingredients] && 'validation-error-field'}
                                required>
                            </textarea>
                            <span className="validation-span">{errors[FormKeys.Ingredients]}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor={[FormKeys.Steps]} className="required">Steps</label>
                            <textarea
                                id="steps"
                                name={[FormKeys.Steps]}
                                rows="7"
                                placeholder="Steps..."
                                value={recipe[FormKeys.Steps]}
                                minLength={IputLengthRequirements.stepsMinLength}
                                maxLength={IputLengthRequirements.stepsMaxLength}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                className={errors[FormKeys.Steps] && 'validation-error-field'}
                                required>
                            </textarea>
                            <span className="validation-span">{errors[FormKeys.Steps]}</span>
                        </div>

                        <div>
                            <button type="submit" className="button sbm-btn">Edit recipe</button>
                            {/* <button type="button" onClick={resetFormHandler} className="button sbm-btn">Reset</button> */}
                        </div>

                    </fieldset>
                </form>

            </section>

        </div>
    );
}