import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import '../css/fan-page.css';
import Nav from './Nav';
import Photo from './sub-components/fan-edit-page/Photo';
import PhotoUploadForm from './sub-components/fan-edit-page/PhotoUploadForm';
import { uploadPhoto, getUser } from '../store/actions/user'; 
import {USER_ID} from '../store/actions/authentication';

const FanEditPage = () => {
    const dispatch = useDispatch();
    const [isUploadFormVisible, setIsUploadFormVisible] = useState(false);
    const [image, setImage] = useState('');
    const user = useSelector((state) => state.user.data);
    const follows = useSelector((state) => state.follows.list);

    console.log("AT BEGINNING OF FAN PAGE!!!");

    if(!user || !follows) {
        console.log("NOT LOADED YET")
        return null;
    }

    // https://i.imgur.com/fu1lHkV.jpg

    const imgUrl = user.imgUrl;
    const name = user.userName;
    const bio = user.bio;
    const followingList = [];
    let total = 0;

    console.log("FOLLOWS CHECK!!!", follows[0].User.imgUrl);
    
    for(const property in follows) {
        followingList.push(follows[property].User);
        total++;
    }

    const handleUploadBtn = (e) => {
        console.log("upload button clicked!");
        setIsUploadFormVisible(true);
        // <input
        //   type="file"
        //   placeholder="Upload an image"
        //   required
        //   onChange={(e) => setImage(e.target.files[0])}
        // />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("IMAGE!!", image);
        const data = new FormData();
        data.append("file", image);

        setIsUploadFormVisible(false);
        // dispatch(uploadPhoto(data)).then((s) => {
        //     console.log("SSSS!!!", s);
        // });
        (async () => await dispatch(uploadPhoto(data)))();
        (async () => await dispatch(getUser(localStorage.getItem(USER_ID))))();
    }

    const handleDelete = (e) => {
        // dispatch();
    }

    return (
        <>
        <Nav />
        { isUploadFormVisible ? 
            (<PhotoUploadForm 
                setIsUploadFormVisible={setIsUploadFormVisible} 
                handleSubmit={handleSubmit} setImage={setImage} 
                />) : (null)
        }
            <div className="fan-page-holder">
                <div className="fan-page">
                    <div className="content-holder">
                        <div className="photo-holder">
                            <Photo imgUrl={imgUrl} handleUploadBtn={handleUploadBtn} />
                            {/* <img className="album" src={imgUrl}/> */}
                        </div>
                        <div className="name-bio-holder">
                            <div className="name">
                                {name}
                            </div>
                            <div className="bio-header">
                                Bio
                            </div>
                            <div className="bio">
                                {/* {bio} */}
                                Nunc convallis molestie libero et faucibus. 
                                Integer ut congue risus, sed aliquet justo. 
                                Aliquam id imperdiet nisl, pellentesque sagittis est. 
                                Praesent molestie placerat turpis eget consequat. 
                                Phasellus vitae euismod velit. Nullam at ornare dui, 
                                ut mattis mauris. Etiam metus sapien, porta eget est nec, 
                                egestas dapibus nulla.
                            </div>
                        </div>
                    </div>

                    <div className="follows-header-holder">
                        following: <span>{total}</span>
                    </div>

                    <div className="follows-holder">

                        {followingList.map((follow) => (
                            <div key={follow.id} className="follow-holder">

                                <img className="artist-photo" src={follow.imgUrl}/>

                                <div className="artist-name-btn-holder">
                                    <div className="artist-name">
                                        {follow.userName}
                                    </div>
                                    <button className="unfollow-btn">unfollow</button>
                                </div>

                            </div>
                        ))}


                        {/* <div className="follow-holder">
                            
                            <img className="artist-photo" src={followingList[0].imgUrl}/>

                            <div className="artist-name-btn-holder">
                                <div className="artist-name">
                                    artist name
                                </div>
                                <button className="unfollow-btn">unfollow</button>
                            </div>

                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default FanEditPage;