import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import '../css/modal-forms.css';
import { fanSignup } from "../store/actions/authentication";
// import { setToken } from "../store/actions/authentication";

const FanSignupForm = ({ hideFanSignupForm }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const artist = false;
    const bio= ''; 
    const imgUrl= '';
    // const [formVisible, setFormVisible] = useState("");
    const dispatch = useDispatch();
 
    // for testing

    const updateProperty = (property) => (e) => {
        console.log(e.target.value)
        property(e.target.value);
    }

    const handleClose = (e) => {
        console.log('close');
        hideFanSignupForm();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('IN HANDLESUBMIT!!!');
        const payload = {
            email,
            password,
            userName,
            artist,
            bio,
            imgUrl
        }

        const token = dispatch(fanSignup(payload));
        if(token) {
            hideFanSignupForm();
        }
        
        // (async () => {
        //     const successMessage = dispatch(FanSignup(payload));
        //     if(successMessage) {
        //     }
        // })();
    }

    return (
        <div className="form-holder">
            <div className="form-content">
                <div className="form-header-container">
                    <h3 className="form-header">Sign up for a Songcamp fan account</h3> <span onClick={handleClose} className="form-close-btn">x</span>
                </div>
                <form className="form">
                    <ul className="errors-container"></ul>
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

export default FanSignupForm;
