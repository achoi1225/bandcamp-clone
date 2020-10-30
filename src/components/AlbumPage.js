import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../css/album-page.css';
import Nav from './Nav';
// import {getAlbums} from '../store/actions/albums';
import {getOneAlbum, setCurrent} from '../store/actions/album';

const AlbumPage = (props) => {
    const [currentTrack, setCurrentTrack] = useState('');
    const current = useSelector((state) => state.album.current)

    const dispatch = useDispatch();
    const { id } = useParams();
    const albumId = Number.parseInt(id);

    useEffect(() => {
        dispatch(getOneAlbum(albumId));
        // (async () => dispatch(getOneAlbum(albumId)))();
    }, [albumId])
    
    // console.log("CURRENT!!!!", current);
    
    if(!current) {
        return null;
    }
    
    const album = current.album;
    const tracks = current.album.Tracks;
    const artist = current.album.User;
    const trackTest = tracks[0].trackUrl;

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

                            <button className="follow-btn">Follow</button>

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