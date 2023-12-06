import { useContext } from "react";
import { Link } from "react-router-dom"

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../paths";

const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    ConfirmPassword: 'confirmPassword',
};

const FormInitialState = {
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Username]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.ConfirmPassword]: '',
};

export default function Register() {
    const {registerSubmitHandler} = useContext(AuthContext);
    const {formValues, onChange, onSubmit} = useForm(registerSubmitHandler, FormInitialState);

    return(
        <div className="content-wrap login">
            <h2 className="page-title divider">Register</h2>

            <section className="form-section">

                <form id="login-form" onSubmit={onSubmit}>

                    <fieldset>

                        <legend>Register</legend>

                        <div className="form-group">
                            <label htmlFor={RegisterFormKeys.Username} className="form-label required">Username</label>
                            <input
                                type="text"
                                id="firstName"
                                name={RegisterFormKeys.Username}
                                value={formValues[RegisterFormKeys.Username]}
                                className="form-control"
                                onChange={onChange}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor={RegisterFormKeys.Email} className="form-label required">Email</label>
                            <input
                                type="email"
                                id="email"
                                name={RegisterFormKeys.Email}
                                value={formValues[RegisterFormKeys.Email]}
                                className="form-control"
                                onChange={onChange}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor={RegisterFormKeys.Password} className="form-label required">Password</label>
                            <input
                                type="password"
                                id="password"
                                name={RegisterFormKeys.Password}
                                value={formValues[RegisterFormKeys.Password]}
                                className="form-control"
                                onChange={onChange}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor={RegisterFormKeys.ConfirmPassword} className="form-label required">Confirm password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name={RegisterFormKeys.ConfirmPassword}
                                value={formValues[RegisterFormKeys.ConfirmPassword]}
                                className="form-control"
                                onChange={onChange}
                                required />
                        </div>

                        <div>
                            <button id="login-submit" type="submit" className="sbm-btn">Register</button>
                        </div>
                    </fieldset>

                    <div className="login-register-switch">Already registered? Go to <Link to={Path.Login} className="link">login</Link>.</div>
                </form>

            </section>
        </div>
    );
}