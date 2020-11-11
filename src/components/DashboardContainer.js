import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { uploadPhoto, deletePhoto, getUser, editBio } from '../store/actions/user'; 
import {USER_ID} from '../store/actions/authentication';
import { getFollowing, deleteFollow } from '../store/actions/follows';
import Dashboard from './Dashboard';

const DashboardContainer = () => {
    // const userId = localStorage.getItem(USER_ID);
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.data);
    const [artistPhotoExists, setArtistPhotoExists] = useState(false);
    // const follows = useSelector((state) => state.follows.list);

    useEffect(() => {
        // dispatch(getFollowing());
        // dispatch(getUser());
    }, []);
    
    if(!user) {
        return null;
    }

    return (
        <Dashboard 
            user={user}
            artistPhotoExists={artistPhotoExists}
            setArtistPhotoExists={setArtistPhotoExists} 
        />
    );
}

export default DashboardContainer;