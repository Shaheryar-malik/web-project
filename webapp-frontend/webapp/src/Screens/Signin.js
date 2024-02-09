import React from "react";
import "../Styles/Signin.css";
function Login() {
    return (
        <div className="login_main">
            <div className="login_mainbox">
                <form className="login_form">
                    <h2>Sign in</h2>
                    <p>Email</p>
                    <input type="email" placeholder="Enter your email" />
                    <p>Password</p>
                    <input type="password" placeholder="Ennter your password" />
                    <div className="Signin_buttons">
                        <button type="submit" className="Signin_btn-1">
                            <a href="/">Sign in</a>
                        </button>
                        <button type="submit" className="Signin_btn-2">
                            <a href="/signup">Sign up</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
