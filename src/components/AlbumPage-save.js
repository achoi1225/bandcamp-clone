import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import Nav from './Nav';
// import {getAlbums} from '../store/actions/albums';
import {getOneAlbum} from '../store/actions/album';

const AlbumPage = (props) => {
    const current = useSelector((state) => state.album.current)
    // const tracks = useSelector((state) => state.album.current.Tracks)
    // const artist = useSelector((state) => state.album.current.album.User)
    const artistPhotoExists = false;

    const dispatch = useDispatch();
    const { id } = useParams();
    const albumId = Number.parseInt(id);
    
    const album = current.album;
    const tracks = current.album.Tracks;
    const artist = current.album.User;
    useEffect(() => {
        dispatch(getOneAlbum(albumId));
    }, [albumId, dispatch])


    return (
        <>
            {<Nav />}
            <div className="album-page__holder">

                <div className="album-page">
                    <div className="album-page__header-holder">
                    <h1 className="album-page__header">{artist.artistName}</h1>
                    </div>

                    <div className="album-page__content-holder">
                        <div className="album-page__left-content">
                            <div className="album-header">
                                {album.title}
                            </div>

                            <div>
                                by {artist.artistName}
                            </div>

                            {tracks.map((track) => (
                                <div key={track.id} className="audio-player">
                                    {track.title}
                                </div>
                            ))}

                        </div>

                        <div className="album-page__middle-content">
                            <div className="album-cover">
                                <img src={album.imgUrl} />
                            </div>
                            <div className="description">
                                {album.description}
                            </div>
                        </div>

                        <div className="album-page__right-content">
                       
                            <img className="artist-photo" src={artist.imgUrl} />
                            
                            <div>
                                {artist.artistName}
                            </div>

                            <div className="follow-btn">

                            </div>

                            <div className="bio">
                                {artist.bio}
                            </div>
                        </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default AlbumPage;