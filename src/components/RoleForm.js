import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showFanSignupForm } from "../store/actions/ui-fan-signup-form";
// import { FanSignup } from "../store/actions/authentication";
// import { setToken } from "../store/actions/authentication";

const RoleForm = ({ hideRoleForm, showFanSignupForm, setRole }) => {

    const updateRole = (e) =>  {
        e.preventDefault();
        console.log(`USER CHOSE ${e.target.value} AS ROLE!!!!`);
        setRole(e.target.value);
        showFanSignupForm();
        hideRoleForm();
    }

    const handleClose = (e) => {
        console.log('close');
        hideRoleForm();
    }

    return (
        <div className="signup-form-holder">
            <div className="signup-form-content">
                <div className="signup-form-header-container">
                    <h3 className="signup-form-header">Sign up for a Songcamp account</h3>
                    <span onClick={handleClose} className="signup-form-close-btn">x</span>
                </div>

                <form className="signup-form">
                    <button value="fan" onClick={updateRole}>Sign up as a fan</button>
                    <button value="artist" onClick={updateRole}>Sign up as an artist</button>
                </form>
            </div>
        </div>
    )
}

export default RoleForm;