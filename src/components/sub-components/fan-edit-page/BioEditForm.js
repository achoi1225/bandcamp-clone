import React from 'react';
import '../../../css/edit-form.css';

const BioEditForm = ({ updateProperty, setBio, handleBioSubmitBtn }) => {
    return (
        <div className="bio-form-holder">
            <form onSubmit={handleBioSubmitBtn} className="bio-form">
                <textarea onChange={updateProperty(setBio)}>
                </textarea>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default BioEditForm;