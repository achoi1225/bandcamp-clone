import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../../../css/upload-form.css';
// import { setToken } from "../store/actions/authentication";

const PhotoUploadForm = ({setIsUploadFormVisible, handleSubmit, setImage}) => {

    const updateRole = (e) =>  {
        e.preventDefault();
        console.log(`USER CHOSE ${e.target.value} AS ROLE!!!!`);
        // setRole(e.target.value);
        // showFanSignupForm();
        // hideRoleForm();
    }

    const handleClose = (e) => {
        console.log('close');
        setIsUploadFormVisible(false);
    }

    return (
        <div className="form-holder">
            <div className="form-content">
                <div className="form-header-container">
                    <h3 className="form-header">Choose image to upload</h3>
                    <span onClick={handleClose} className="close-btn">x</span>
                </div>

                <form onSubmit={handleSubmit} className="upload-form">
                    <input
                        type="file"
                        placeholder="Upload an image"
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default PhotoUploadForm;