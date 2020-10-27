import React, { useState,useEffect, useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';
import SignupForm from './SignupForm';

const Nav = () => {
    const [searchValue, setSearchValue] = useState('');

    const updateProperty = (e) => {
        console.log(e.target.value);
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
            <SignupButton />
            <LoginButton />
            <SignupForm />
        </nav>
    )
}

export default Nav;