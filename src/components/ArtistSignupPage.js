import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { FanSignup } from "../store/actions/authentication";

const ArtistSignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    // const [formVisible, setFormVisible] = useState("");
    const dispatch = useDispatch();


    const updateProperty = (property) => (e) => {
        console.log(e.target.value)
        property(e.target.value);
    }

    const handleClose = (e) => {
        console.log('close')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('IN HANDLESUBMIT!!!');
        const payload = {
            email,
            password,
            userName,
        }

        // dispatch(FanSignup(payload));
    }

    return (
        <div className="artist-signup-form__holder">
            <div className="signup-form-content">
                <div className="signup-form-header-container">
                    <h3 className="signup-form-header">Sign up for a Songcamp artist account</h3> <span onClick={handleClose} className="signup-form-close-btn">x</span>
                </div>
                <form className="signup-form">
                    <label>Email address</label>
                    <input name="email" placeholder={email} value={email} onChange={updateProperty(setEmail)}/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder={password} value={password} onChange={updateProperty(setPassword)}/>
                    <label>Username</label>
                    <input type="text" name="username" placeholder={userName} value={userName} onChange={updateProperty(setUserName)} />
                    <button onClick={handleSubmit}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default ArtistSignupForm;