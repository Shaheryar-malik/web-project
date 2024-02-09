import React from "react";
import "../Styles/Signup.css";
function Signup() {
    return (
        <div className="signup_main">
            <div className="signup_main_box">
                <img src="/images/note.jpg" alt="not found" />
                <form className="signup_Text_side">
                    <h2>Sign up</h2>
                    <p>Full Name</p>
                    <input type="text" placeholder="Enter Name" />
                    <p>Email</p>
                    <input type="email" placeholder="Enter Email" />
                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" />
                    <p>Repeat Password</p>
                    <input type="password" placeholder="Confirm Password" />
                    <div className="signup_buttons">
                        <button type="submit" className="signup_btn-1"><a href="/">Sign up</a></button>
                        <button type="submit" className="signup_btn-2"><a href="/">Sign in</a></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
