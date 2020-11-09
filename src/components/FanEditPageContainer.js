import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadPhoto, deletePhoto, getUser, editBio } from '../store/actions/user'; 
import {USER_ID} from '../store/actions/authentication';
import { getFollowing, deleteFollow } from '../store/actions/follows';
import FanEditPage from './FanEditPage';

const FanEditPageContainer = () => {
    const userId = localStorage.getItem(USER_ID);
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.data);
    const follows = useSelector((state) => state.follows.list);

    useEffect(() => {
        dispatch(getFollowing());
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
            deleteFollow={(id) => dispatch(deleteFollow(id))}
        />
    );
}

export default FanEditPageContainer;