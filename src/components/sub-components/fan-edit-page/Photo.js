import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

const Photo = ({imgUrl, handleUploadBtn, handleDelete}) => {
    // const [photoExists, setPhotoExists] = useState(false);
    // const [isLoaded, setIsLoaded] = useState(false);
    let photoExists = false;

    if(imgUrl) {
        photoExists = true;
    }

    // const handleDelete = (e) => {

    // }

    return (
        <>
            { photoExists ? (
                    <>
                        <img className="photo" src={imgUrl}/>
                        <button onClick={handleDelete} className="delete-btn"><i className="fa fa-times" aria-hidden="true"></i></button>
                    </>
                ) : (
                    <button onClick={handleUploadBtn} className="upload-img-btn">
                        Upload image
                    </button>
                )
            }
        </>
    )
}

export default Photo