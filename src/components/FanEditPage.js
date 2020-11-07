import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import '../css/fan-edit-page.css';
import Nav from './Nav';
import Photo from './sub-components/fan-edit-page/Photo';
import Bio from './sub-components/fan-edit-page/Bio';
import BioEditForm from './sub-components/fan-edit-page/BioEditForm';
import PhotoUploadForm from './sub-components/fan-edit-page/PhotoUploadForm';
import {USER_ID} from '../store/actions/authentication';


const FanEditPage = ({
    user, 
    follows, 
    currentImgUrl, 
    name, 
    currentBio, 
    uploadPhoto, 
    deletePhoto,
    editBio }) => {
    console.log("IN FAN EDIT PAGE!!!");

    const userId = localStorage.getItem(USER_ID);
    // const dispatch = useDispatch();
    const [isUploadPhotoFormVisible, setIsUploadPhotoFormVisible] = useState(false);
    const [isBioEditFormVisible, setIsBioEditFormVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [imgUrl, setImgUrl] = useState(currentImgUrl);
    const [bio, setBio] = useState(currentBio);
    

    const handleUploadPhotoBtn = (e) => {
        console.log("upload button clicked!");
        setIsUploadPhotoFormVisible(true);
    }

    const handleDeletePhotoBtn = (e) => {
        console.log("delete button clicked!");
        (async () => {
            const nullUrl = await deletePhoto();
            setImgUrl(nullUrl);
        })();
    }
    
    const handlePhotoSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", image);
        
        setIsUploadPhotoFormVisible(false);
   
        (async () => {
            const url = await uploadPhoto(data);
            setImgUrl(url);
        })();
    }

    const handleBioEditBtn = (e) => {
        setIsBioEditFormVisible(true);
    }
    
    const updateProperty = (callback) => (e) => {
        callback(e.target.value);
        console.log("BIO", bio);
    };

    const handleBioSubmitBtn = (e) => {
        e.preventDefault();

        const data = { bio }
        editBio(data)
    }
    
    console.log("USER!!!!", user);

    if(!user) {
        console.log("NOT LOADED YET")
        return null;
    }
    

    console.log("IMG URL!!!", imgUrl);

    const followingList = [];
    let total = 0;
    
    for(const property in follows) {
        followingList.push(follows[property].User);
        total++;
    }

    return (
        <>
        <Nav />
        { isUploadPhotoFormVisible ? 
            (<PhotoUploadForm 
                setIsUploadPhotoFormVisible={setIsUploadPhotoFormVisible} 
                handlePhotoSubmit={handlePhotoSubmit} setImage={setImage} 
                />) : (null)
        }
            <div className="fan-page-holder">
                <div className="fan-page">
                    <div className="content-holder">
                        <div className="photo-holder">
                            <Photo 
                                imgUrl={imgUrl} 
                                handleUploadPhotoBtn={handleUploadPhotoBtn} 
                                handleDeletePhotoBtn={handleDeletePhotoBtn}
                            />
                        </div>
                        <div className="name-bio-holder">
                            <div className="name">
                                {name}
                            </div>
                            <div className="bio-header">
                                Bio
                                <button onClick={handleBioEditBtn} className="bio-edit-btn">edit</button>
                            </div>

                            {   isBioEditFormVisible ? 
                                    (<BioEditForm  
                                        updateProperty={updateProperty} 
                                        setBio={setBio}  
                                        handleBioSubmitBtn={handleBioSubmitBtn}
                                    />) : 
                                    (<Bio bio={bio}/>)
                            }

                        </div>
                    </div>

                    <div className="follows-header-holder">
                        following: <span>{total}</span>
                    </div>

                    <div className="follows-holder">

                        {followingList.map((follow) => (
                            <div key={follow.id} className="follow-holder">

                                <img className="artist-photo" src={follow.imgUrl}/>

                                <div className="artist-name-btn-holder">
                                    <div className="artist-name">
                                        {follow.userName}
                                    </div>
                                    <button className="unfollow-btn">unfollow</button>
                                </div>

                            </div>
                        ))}


                        {/* <div className="follow-holder">
                            
                            <img className="artist-photo" src={followingList[0].imgUrl}/>

                            <div className="artist-name-btn-holder">
                                <div className="artist-name">
                                    artist name
                                </div>
                                <button className="unfollow-btn">unfollow</button>
                            </div>

                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default FanEditPage;