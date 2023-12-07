import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import Path from '../../paths';

export default function Header() {
    const {
        isAuthenticated,
    } = useContext(AuthContext)

    return (
        <header className="divider">
            <div className="content-wrap">
                <nav>
                    <div className="navigation">
                        <div className="logo">
                            <Link to={Path.Home}><h1>My Best Cook Book</h1></Link>
                        </div>

                        <div className="nav-bar">
                            <ul className="left-nav">
                                <li className="nav-item">
                                    <Link to={Path.Home}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={Path.RecipeList}>Recipes</Link>
                                </li>

                                {isAuthenticated && (
                                    <li className="nav-item">
                                        <Link to={Path.RecipeListFavourite}>Favourite</Link>
                                    </li>
                                )}

                            </ul>
                            <ul className="right-nav">

                                {!isAuthenticated && (
                                    <>
                                        <li className="nav-item">
                                            <Link to={Path.Login}>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={Path.Register}>Register</Link>
                                        </li>
                                    </>
                                )}

                                {isAuthenticated && (
                                    <>
                                        <li className="nav-item">
                                            <Link to={Path.RecipeAdd}>Add</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={Path.RecipeListMy}>My Recipes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={Path.Logout}>Logout</Link>
                                        </li>
                                    </>
                                )}

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    </header>
    );
}