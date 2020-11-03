import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

const FollowBtn = ({followsList, handleFollow, artistId}) => {
    // const [isFollowingArtist, setIsFollowingArtist] = useState(false);
    // const [isLoaded, setIsLoaded] = useState(false);

    let isFollowingArtist;
    console.log('ARTIST ID!!!', artistId)

    for(const property in followsList) {
        console.log("IN LOOP")
        if(followsList[property].followingId === artistId) {
            isFollowingArtist=true;
            console.log("TRUE!!!");
            break;
        }
    }

    
    // useEffect(() => {
    //     console.log("IN USEEFFECT!!!!")
    //     setIsLoaded(true);
    //      for(const property in followsList) {
    //         if(followsList[property].followingId === artistId) {
    //             setIsFollowingArtist(true);
    //             console.log("TRUE!!!");
    //             break;
    //         } 
    //     }
    // }, [isLoaded])

    // if(!isLoaded) {
    //     return null;
    // }

    return (
        <>
            {console.log("HERE!")}
            { isFollowingArtist ? (
                <button className="follow-btn">
                    <span>Following <i className="fa fa-check-circle-o" aria-hidden="true"></i></span>
                </button>
                ) : (
                    <button onClick={handleFollow} className="follow-btn">
                    <span>Follow</span>
                    </button>
                )
            }
        </>
    )
}

export default FollowBtn;