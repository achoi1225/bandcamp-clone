import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../css/album-page.css';
import Nav from './Nav';
import FollowBtn from './sub-components/album-page/FollowBtn';
import { USER_ID } from '../store/actions/authentication';
import { getOneAlbum } from '../store/actions/album';
import { follow, getFollowing } from '../store/actions/follows';

const AlbumPage = () => {
    const [currentTrack, setCurrentTrack] = useState('');
    // const [isFollowingArtist, setIsFollowingArtist] = useState(false);

    const current = useSelector((state) => state.album.current);
    const followsList = useSelector((state) => state.follows.list);
    const userId = localStorage.getItem(USER_ID);

    const dispatch = useDispatch();
    const { id } = useParams();
    const albumId = Number.parseInt(id);

    useEffect(() => {
        dispatch(getOneAlbum(albumId));
        // dispatch(getFollowing(userId));
        // (async () => dispatch(getOneAlbum(albumId)))();
    }, [albumId])
    
    // useEffect(() => {
    //     dispatch(getFollowing(userId));
    //     // for(const property in followsList) {
    //     //     // console.log("FOLLOWING ID ",followsList[property].followingId);
    //     //     // console.log("ARTIST ID ", artist.id);
    //     //     console.log("HERE!!!")
    //     //     if(followsList[property].followingId === artist.id) {
    //     //         // setIsFollowingArtist(true);
    //     //         console.log("TRUE!!!");
    //     //         break;
    //     //     }
    //     // }
    // }, [userId]);
    
    
    
    if(!current) {
        return null;
    }

    console.log("FOLLOWSLIST!!", followsList);
    const album = current.album;
    const tracks = current.album.Tracks;
    const artist = current.album.User;

    // for(const property in followsList) {
    //     // console.log("FOLLOWING ID ",followsList[property].followingId);
    //     // console.log("ARTIST ID ", artist.id);
    //     if(followsList[property].followingId === artist.id) {
    //         // setIsFollowingArtist(true);
    //         console.log("TRUE!!!");
    //         break;
    //     }
    // }

    const handleFollow = (e) => {
        console.log('button test!!!', e.target.value);
        dispatch(follow(artist.id));
    }

    return (
        <>
            {<Nav />}
            <div className="album-page__holder">

                <div className="album-page">
                    <div className="album-page__header-holder">
                    <h1 className="album-page__header">{album.title}</h1>
                    </div>

                    <div className="album-page__content-holder">
                        <div className="album-page__left-content">
                            {/* <div className="album-header">
                                {album.title}
                            </div> */}

                            <div className="artist-name-holder">
                                by {artist.artistName}
                            </div>
                            
                            <div className="audio-player-holder">
                                <AudioPlayer
                                    autoPlay={false}
                                    volume={0.5}
                                    src={currentTrack}
                                    onPlay={e => console.log("onPlay")}
                                    showDownloadProgress={true}
                                />
                            </div>


                            {tracks.map((track, i) => (
                                <div key={track.id} className="track-holder">
                                    <span>{i+1}. </span> 
                                    <button onClick={() => setCurrentTrack(track.trackUrl)} className="track">
                                        {track.title}
                                    </button>
                                </div>
                            ))}

                        </div>

                        <div className="album-page__middle-content">
                            <div className="album-cover-holder">
                                <img className="album-cover" src={album.imgUrl} />
                            </div>
                            <div className="description">
                                {album.description}
                            </div>
                        </div>

                        <div className="album-page__right-content">
                       
                            <img className="artist-photo" src={artist.imgUrl} />
                            
                            <div className="artist-name">
                                {artist.artistName}
                            </div>

                            <FollowBtn followsList={followsList} handleFollow={handleFollow} artistId={artist.id} />
                            {/* { isFollowingArtist ? (
                                <button className="follow-btn">
                                    <span>Following <i className="fa fa-check-circle-o" aria-hidden="true"></i></span>
                                </button>
                                ) : (
                                    <button onClick={handleFollow} className="follow-btn">
                                    <span>Follow</span>
                                    </button>
                                )
                            } */}
                            
                

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