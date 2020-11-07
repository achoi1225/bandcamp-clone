import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import Nav from './Nav';
import Photo from './sub-components/fan-edit-page/Photo';
import PhotoUploadForm from './sub-components/fan-edit-page/PhotoUploadForm';
import { uploadPhoto, deletePhoto, getUser, editBio } from '../store/actions/user'; 
import {USER_ID} from '../store/actions/authentication';
import { getFollowing } from '../store/actions/follows';
import FanEditPage from './FanEditPage';

const FanEditPageContainer = () => {
    const userId = localStorage.getItem(USER_ID);
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.data);
    const follows = useSelector((state) => state.follows.list);

    useEffect(() => {
        // (async () => await dispatch(getFollowing(userId)))();
        // (async () => await dispatch(getUser(userId)))();

        dispatch(getFollowing(userId));
        dispatch(getUser(userId));
    }, [userId]);
    
    if(!user || !follows) {
        return null;
    }

    return (
        <FanEditPage 
            user={user} 
            follows={follows} 
            currentImgUrl={user.imgUrl} 
            name={user.userName} 
            currentBio={user.bio}
            uploadPhoto={(data) => dispatch(uploadPhoto(data))}
            deletePhoto={() => dispatch(deletePhoto())}
            editBio={(data) => dispatch(editBio(data))}
        />
    );
}

export default FanEditPageContainer;