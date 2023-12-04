import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

import useForm from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

const FormInitialState = {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
};

export default function Login() {
    const {loginSubmitHandler} = useContext(AuthContext);
    const {formValues, onChange, onSubmit} = useForm(loginSubmitHandler, FormInitialState);

    return(
        <div className="content-wrap login">
            <h2 className="page-title divider">Log in</h2>

            <section className="form-section">

                <form id="login-form" onSubmit={onSubmit}>

                    <fieldset>

                        <legend>Login</legend>

                        <div className="form-group">
                            <label htmlFor={LoginFormKeys.Email} className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name={LoginFormKeys.Email}
                                className="form-control"
                                placeholder="example@you.com"
                                value={formValues[LoginFormKeys.Email]}
                                onChange={onChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor={LoginFormKeys.Password} className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name={LoginFormKeys.Password}
                                className="form-control"
                                placeholder="Password"
                                value={formValues[LoginFormKeys.Password]}
                                onChange={onChange} />
                        </div>

                        <div>
                            <button id="login-submit" type="submit" className="sbm-btn">Log in</button>
                        </div>
                    </fieldset>

                    <div className="login-register-switch">Don't have an account? Go to <Link to="/register" className="link">register</Link>.</div>
                </form>

            </section>
        </div>
    );
}