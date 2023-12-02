export default function Login() {
    return(
        <div className="content-wrap login">
            <h2 className="page-title divider">Log in</h2>

            <section className="form-section">

                <form id="login-form" method="post">

                    <fieldset>

                        <legend>Login</legend>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" name="password" className="form-control" />
                        </div>

                        <div>
                            <button id="login-submit" type="submit" className="sbm-btn">Log in</button>
                        </div>
                    </fieldset>

                </form>

            </section>
        </div>
    );
}