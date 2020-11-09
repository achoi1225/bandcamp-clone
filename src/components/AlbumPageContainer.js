import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {USER_ID} from '../store/actions/authentication';
import { getUser } from '../store/actions/user'; 
import { getFollowing, follow, deleteFollow } from '../store/actions/follows';
import { getOneAlbum } from '../store/actions/album';
import AlbumPage from './AlbumPage';

const AlbumPageContainer = () => {
    const userId = localStorage.getItem(USER_ID);
    const { id } = useParams();
    const albumId = Number.parseInt(id);

    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.data);
    const follows = useSelector((state) => state.follows.list);
    const current = useSelector((state) => state.album.current);

    useEffect(() => {
        dispatch(getFollowing());
        dispatch(getUser(userId));
    }, [userId]);

    useEffect(() => {
        dispatch(getOneAlbum(albumId));
    }, [albumId]);
    
    if(!user || !follows) {
        return null;
    }

    return (
        <AlbumPage
            // getOneAlbum={(albumId) => dispatch(getOneAlbum(albumId))}
            user={user}
            follows={follows}
            current={current}
            follow={(artistId) => dispatch(follow(artistId))}
            deleteFollow={(artistId) => dispatch(deleteFollow(artistId))}
        />
    );
}

export default AlbumPageContainer;