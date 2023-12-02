import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="divider">
            <div className="content-wrap">
                <nav>
                    <div className="navigation">
                        <div className="logo">
                            <Link to="/"><h1>My Best Cook Book</h1></Link>
                        </div>

                        <div className="nav-bar">
                            <ul className="left-nav">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/recipes">Recipes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/favourite">Favourite</Link>
                                </li>
                            </ul>
                            <ul className="right-nav">
                                {/* <li className="nav-item">
                                    <Link to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register">Register</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="/recipes/add">Add</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/my">My Recipes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    </header>
    );
}