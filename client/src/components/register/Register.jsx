import { Link } from "react-router-dom"

export default function Register() {
    return(
        <div className="content-wrap login">
            <h2 className="page-title divider">Register</h2>

            <section className="form-section">

                <form id="login-form" method="post">

                    <fieldset>

                        <legend>Register</legend>

                        {/* <div className="form-group">
                            <label htmlFor="firstName" className="form-label required">First name</label>
                            <input type="text" id="firstName" name="firstName" className="form-control" />
                        </div> */}

                        {/* <div className="form-group">
                            <label htmlFor="lastName" className="form-label required">Last name</label>
                            <input type="text" id="lastName" name="lastName" className="form-control" />
                        </div> */}

                        <div className="form-group">
                            <label htmlFor="email" className="form-label required">Email</label>
                            <input type="email" id="email" name="email" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label required">Password</label>
                            <input type="password" id="password" name="password" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="form-label required">Confirm password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
                        </div>

                        <div>
                            <button id="login-submit" type="submit" className="sbm-btn">Register</button>
                        </div>
                    </fieldset>

                    <div className="login-register-switch">Already registered? Go to <Link to="/login" className="link">login</Link>.</div>
                </form>

            </section>
        </div>
    );
}