import React from 'react';

const Dashboard = () => {

    const artistPhotoExists = false;
    const artistImgUrl = 'https://i.imgur.com/ZpkMNwZ.jpg';
    const artistName = "The Pojos";

    return (
        <div className="artist-page__holder">
            <div className="artist-page">
                <div className="artist-page__header-holder">
                    <h1 className="artist-page__header">{artistName}</h1>
                </div>
                <div className="top-content__holder">

                    <div className="discography">
                        <div className="discography__intro">Start off by adding album to your discography!</div>
                        <div className="discography__header-holder">
                            <h3>DISCOGRAPHY</h3> <button className="discography__add-btn">+ add</button>
                        </div>
                        <div className="albums__holder">
                            <div className="album__placeholder"></div>
                            <div className="album__placeholder"></div>
                            <div className="album__placeholder"></div>
                            <div className="album__placeholder"></div>
                            <div className="album__placeholder"></div>
                            <div className="album__placeholder"></div>
                            <div className="album__placeholder"></div>
                            <div className="album__placeholder"></div>
                        </div>
                    </div>

                    <div className="artist-info__holder">
                        { artistPhotoExists ? 
                            (<img src={artistImgUrl} className="artist-info__photo" />) :
                            (<button className="artist-info__photo-placeholder">add artist photo</button>)
                        }
                        <div className="artist-info__name">
                            {artistName}
                        </div>
                            
                        <button className="artist-info__add-bio-btn">add artist bio</button>
                    </div>


                </div>

                <h3>FOLLOWERS</h3>
                <div className="followers__holder">
                    <div className="follower__placeholder"></div>
                    <div className="follower__placeholder"></div>
                    <div className="follower__placeholder"></div>
                    <div className="follower__placeholder"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;