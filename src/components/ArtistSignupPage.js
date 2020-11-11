import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import '../css/artist-signup-page.css';
import { getGenres } from "../store/actions/genres";
import { artistSignup } from "../store/actions/authentication";

const ArtistSignupForm = () => {
    const [artistName, setArtistName] = useState("");
    const [genre, setGenre] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const genreList = useSelector((state) => state.genres.list);
    const artist = true;
    // const follows = useSelector((state) => state.follows.list);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getGenres());
    }, []);

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
            artistName,
            genre,
            email,
            userName,
            password,
            artist
        }

        console.log("PAYLOAD", payload);
        dispatch(artistSignup(payload));
        history.replace("/dashboard");
    }


//     <select onChange={updateProperty(setType)}>
//     {types.map((type) => (
//       <option key={type}>{type}</option>
//     ))}
//   </select>

    if(!genreList) {
        return null;
    }

    console.log("GENRE LIST", genreList);

    return (
        <div className="artist-signup-form__holder">
            <div className="artist-signup-form__content">
                <div className="artist-signup-form__header-container">
                    <h3 className="signup-form-header">Sign up for a Songcamp artist account</h3> <span onClick={handleClose} className="signup-form-close-btn">x</span>
                </div>
                <form className="artist-signup-form">
                    <label>Artist/Band name</label>
                    <input type="text" name="artistName" placeholder={artistName} value={artistName} onChange={updateProperty(setArtistName)} />
                    <label>Genre</label>
                    <select onChange={updateProperty(setGenre)}>
                        <option>-- choose a genre --</option>
                        {genreList.map((genre) => (
                            <option key={genre.id}>{genre.type}</option>
                        ))}
                    </select>
                    <label>Username</label>
                    <input type="text" name="username" placeholder={userName} value={userName} onChange={updateProperty(setUserName)} />
                    <label>Email address</label>
                    <input name="email" placeholder={email} value={email} onChange={updateProperty(setEmail)}/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder={password} value={password} onChange={updateProperty(setPassword)}/>
                    <button onClick={handleSubmit}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default ArtistSignupForm;