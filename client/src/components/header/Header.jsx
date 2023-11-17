export default function Header() {
    return (
        <header className="divider">
            <div className="content-wrap">
                <nav>
                    <div className="navigation">
                        <div className="logo">
                            <a href=""><h1>My Best Cook Book</h1></a>
                        </div>

                        <div className="nav-bar">
                            <ul className="left-nav">
                                <li className="nav-item">
                                    <a href="">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="">Recipes</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="">Favourite</a>
                                </li> */}
                            </ul>
                            <ul className="right-nav">
                                <li className="nav-item">
                                    <a href="">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a href="">Register</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="">Add</a>
                                </li>
                                <li className="nav-item">
                                    <a href="">My Recipes</a>
                                </li>
                                <li className="nav-item">
                                    <a href="">Account</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    </header>
    );
}