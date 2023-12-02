export default function RecipeList() {
    return (
        <div className="content-wrap">
            <h2 className="divider">Recipes</h2>

            <section className="recipe-list">

                <div className="recipe-box">
                    <div className="recipe-img">
                        <a href="#">
                            <img src="https://lilluna.com/wp-content/uploads/2022/09/easy-pancakes3-resize-10.jpg" />
                        </a>
                    </div>
                    <div className="recipe-info">
                        <div className="recipe-name">
                            <a href="#">
                                Pancakes
                            </a>
                        </div>
                        <div className="recipe-rate">
                            <button className="btn-unset"><i class="fas fa-heart"></i> 999</button>
                        </div>
                    </div>
                    <div className="recipe-btns user">
                        <button className="view-btn">View</button>
                    </div>
                </div>

                <div className="recipe-box">
                    <div className="recipe-img">
                        <a href="#">
                            <img src="https://img.taste.com.au/K02TrrZJ/w720-h480-cfill-q80/taste/2016/11/rachel-87711-2.jpeg" />
                        </a>
                    </div>
                    <div className="recipe-info">
                        <div className="recipe-name">
                            <a href="#">
                                French fries
                            </a>
                        </div>
                        <div className="recipe-rate">
                            <button className="btn-unset"><i class="fas fa-heart"></i> 999</button>
                        </div>
                    </div>
                    <div className="recipe-btns admin">
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                    </div>
                </div>

            </section>
        </div>
    );
}