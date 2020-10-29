import React from 'react';
import Nav from './Nav';

const AlbumPage = () => {

    const artistPhotoExists = false;
    const artistImgUrl = 'https://i.imgur.com/ZpkMNwZ.jpg';
    const artistName = "Testers";

    return (
        <>
            {<Nav />}
            <div className="album-page__holder">

                <div className="album-page">
                    <div className="album-page__header-holder">
                        <h1 className="album-page__header">{artistName}</h1>
                        by artist
                    </div>

                    <div className="album-page__content-holder">
                        <div className="album-page__left-content">
                            <div className="album-header">
                                Title here
                            </div>

                            <div className="audio-player">
                                audio here
                            </div>

                            <div className="track-holder">
                                track 1
                            </div>

                            <div className="track-holder">
                                track 2
                            </div>

                            <div className="track-holder">
                                track 3
                            </div>
                        </div>

                        <div className="album-page__middle-content">
                            <div className="album-cover">
                                album cover
                            </div>
                            <div className="description">
                                description
                            </div>
                        </div>

                        <div className="album-page__right-content">
                            <div className="artist-photo-holder">

                            </div>
                            name of artist
                            <div className="follow-btn">

                            </div>

                            <div className="bio">

                            </div>
                        </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default AlbumPage;