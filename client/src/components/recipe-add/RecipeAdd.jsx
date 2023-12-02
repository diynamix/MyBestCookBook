export default function RecipeAdd() {
    return (
        <div className="content-wrap add-recipe">
            <h2 className="page-title divider">Add</h2>

            <section className="form-section">

                <form className="recipe-form" method="post">
                    <fieldset>
                        <legend>Add Recipe</legend>

                        <div className="form-group">
                            <label htmlFor="title" className="required">Recipe name</label>
                            <input type="text" id="title" name="title" placeholder="Recipe title" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="imageUrl" className="required">Image link</label>
                            <input type="text" id="imageUrl" name="imageUrl" placeholder="Image link" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="ingredients" className="required">Ingredients</label>
                            <textarea id="ingredients" name="ingredients" placeholder="Ingredients..."></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description" className="required">Description</label>
                            <textarea id="description" name="description" placeholder="Description..."></textarea>
                        </div>

                        <div>
                            <button className="sbm-btn" type="submit">Add</button>
                        </div>

                    </fieldset>
                </form>

            </section>

        </div>
    );
}