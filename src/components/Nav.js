import React, { useState,useEffect, useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { showSignupForm, hideSignupForm } from '../store/actions/ui-signup-form';
import { showLoginForm, hideLoginForm } from '../store/actions/ui-login-form';


const Nav = () => {
    const [searchValue, setSearchValue] = useState('');
    const signupFormVisible = useSelector(state => state.uiSignupForm.formVisible);
    const loginFormVisible = useSelector(state => state.uiLoginForm.formVisible);
    const dispatch = useDispatch();

    const updateProperty = (e) => {
        console.log("SEARCH BAR!!!!", e.target.value);
    }

    return (
        <nav>
            <div className="nav__logo-holder">
                    Songcamp
            </div>
            <div className="nav__form-holder">
                <form>
                    <input className={"search-field"}
                        type="text"
                        placeholder="Search and discover music"
                        value={searchValue}
                        onChange={updateProperty}
                    />
                </form>
            </div>
            <SignupButton 
                showSignupForm={ () => dispatch(showSignupForm()) }
            />
            <LoginButton 
                showLoginForm={ () => dispatch(showLoginForm()) }
            />
            { signupFormVisible ? 
                ( <SignupForm hideSignupForm={ () => dispatch(hideSignupForm()) } /> ) : null }
            { loginFormVisible ? 
                ( <LoginForm hideLoginForm={ () => dispatch(hideLoginForm()) } /> ) : null }  
           
        </nav>
    )
}

export default Nav;