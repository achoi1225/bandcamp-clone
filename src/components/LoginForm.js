import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authentication";
import { setToken } from "../store/actions/authentication";

const LoginForm = ({ hideLoginForm }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();


    const updateProperty = (property) => (e) => {
        property(e.target.value);
    }

    const handleClose = (e) => {
        console.log('close');
        hideLoginForm();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('IN HANDLESUBMIT!!!');
        const payload = {
            email,
            password,
        }

        hideLoginForm();
        dispatch(login(payload));
    }

    return (
        <div className="signup-form-holder">
            <div className="signup-form-content">
                <div className="signup-form-header-container">
                    <h3 className="signup-form-header">Log in</h3> <span onClick={handleClose} className="signup-form-close-btn">x</span>
                </div>
                <form className="signup-form">
                    <label>Email address</label>
                    <input name="email" placeholder={email} value={email} onChange={updateProperty(setEmail)}/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder={password} value={password} onChange={updateProperty(setPassword)}/>
                    <button onClick={handleSubmit}>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;