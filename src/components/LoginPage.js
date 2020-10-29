import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import vinyl from '../images/vinyl.jpeg';
import tent from '../images/tent.png';
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';
import FanSignupForm from './FanSignupForm';
import LoginForm from './LoginForm';
import RoleForm from './RoleForm';
import { showFanSignupForm, hideFanSignupForm } from '../store/actions/ui-fan-signup-form';
import { showLoginForm, hideLoginForm } from '../store/actions/ui-login-form';
import { showRoleForm, hideRoleForm } from '../store/actions/ui-role-form';
// import { FanSignup } from "../store/actions/authentication";

const LoginPage = () => {
    const [role, setRole] = useState('');
    const fanSignupFormVisible = useSelector(state => state.uiFanSignupForm.formVisible);
    const loginFormVisible = useSelector(state => state.uiLoginForm.formVisible);
    const roleFormVisible = useSelector(state => state.uiRoleForm.formVisible);
    const dispatch = useDispatch();

    // const updateProperty = (property) => (e) => {
    //     console.log(e.target.value)
    //     property(e.target.value);
    // }

    return (
        <>
            <div className="login-page__holder">
                <div className="login-page__header-holder">
                    <div className="login-page__logo-holder">
                        <img import className="login-page__tent-img" src={tent} />
                        <h3>songcamp</h3>
                    </div>
                    <div className="login-page__discover">
                        Discover new and amazing music and support the artists who make it. 
                    </div>

                    <div>
                        <SignupButton 
                            showRoleForm={ () => dispatch(showRoleForm()) }
                        />
                        <LoginButton 
                            showLoginForm={ () => dispatch(showLoginForm()) }
                        />
                        { roleFormVisible ? 
                            ( 
                                <RoleForm 
                                    hideRoleForm={ () => dispatch(hideRoleForm()) } 
                                    showFanSignupForm={ () => dispatch(showFanSignupForm()) } 
                                    setRole = {setRole} 

                                /> 
                            ) : null 
                        }
                        { fanSignupFormVisible ? 
                            ( <FanSignupForm hideFanSignupForm={ () => dispatch(hideFanSignupForm()) } /> ) : null }
                        { loginFormVisible ? 
                            ( <LoginForm hideLoginForm={ () => dispatch(hideLoginForm()) } /> ) : null }  
                    </div>
                    
                </div>
                    <div className="login-page__main-img-holder">
                        <div className="login-page__message-holder">
                            <h2>Welcome to Songcamp</h2>
                            &nbsp;Listen. Create. Share.
                            <button className="login-page__btn">Sign Up Now</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default LoginPage;