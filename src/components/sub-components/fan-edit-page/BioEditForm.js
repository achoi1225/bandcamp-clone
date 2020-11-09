import React from 'react';
import '../../../css/edit-form.css';

const BioEditForm = ({ updateProperty, bio, setBio, handleBioSubmitBtn, setIsBioEditFormVisible }) => {
    return (
        <div className="bio-form-holder">
            <form onSubmit={handleBioSubmitBtn} className="bio-form">
                <textarea value={bio} onChange={updateProperty(setBio)}>
                </textarea>
                <div className="buttons-holder">
                    <button type="submit">submit</button>
                    <button className="cancel-btn" onClick={() => setIsBioEditFormVisible(false)} type="button">cancel</button>
                </div>

            </form>
        </div>
    )
}

// Donec ut mi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et scelerisque sapien, a semper lectus. Cras sodales mollis purus suscipit congue. Fusce convallis justo ac vulputate dictum. Etiam lacus sem, sollicitudin ut purus quis, blandit condimentum erat. Nullam a scelerisque risus. Aenean blandit ligula nec purus ultricies, non egestas est fermentum.

export default BioEditForm;