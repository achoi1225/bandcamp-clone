import React from 'react';

const SignupButton = ({ showSignupForm }) => {

    const handleClick = (e) => {
        showSignupForm();
    }

    return (
        <div>
            <button onClick={handleClick}>sign up</button>
        </div>
    )
}

export default SignupButton;