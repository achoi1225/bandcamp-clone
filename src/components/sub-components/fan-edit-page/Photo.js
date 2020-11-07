import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Photo = ({imgUrl, handleUploadPhotoBtn, handleDeletePhotoBtn}) => {
    // const [photoExists, setPhotoExists] = useState(false);
    let photoExists = false;

    if(imgUrl) {
        photoExists = true;
    }

    return (
        <>
            { photoExists ? (
                    <>
                        <img className="photo" src={imgUrl}/>
                        <button onClick={handleDeletePhotoBtn} className="delete-photo-btn"><i className="fa fa-times" aria-hidden="true"></i></button>
                    </>
                ) : (
                    <button onClick={handleUploadPhotoBtn} className="upload-img-btn">
                        Upload image
                    </button>
                )
            }
        </>
    )
}

export default Photo