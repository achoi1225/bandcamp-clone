import React from 'react';

const Bio = ({bio}) => {
    let bioExists= false;

    if(bio) {
        bioExists= true;
    }

    return (
        <>
            { 
                bioExists ? (
                    <div className="bio">{bio}</div>
                ) : (
                    <div className="bio">
                        No bio...
                    </div>
                )

            }
        </>
    )
}

export default Bio;
