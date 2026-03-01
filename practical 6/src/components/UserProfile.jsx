import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ name, age, profilePicture, backgroundColor }) => {
    const defaultImage = "https://via.placeholder.com/150?text=No+Image";
    const imageToDisplay = profilePicture ? profilePicture : defaultImage;

    const [isAgeVisible, setIsAgeVisible] = useState(false);

    const toggleAge = () => {
        setIsAgeVisible(!isAgeVisible);
    };

    const cardStyle = {
        backgroundColor: backgroundColor || '#ffffff',
    };

    return (
        <div className="user-profile-card" style={cardStyle}>
            <img src={imageToDisplay} alt={`${name}'s Profile`} className="profile-image" />
            <h2 className="profile-name">{name}</h2>

            {isAgeVisible && <p className="profile-age">Age: {age}</p>}

            <button onClick={toggleAge} className="toggle-age-btn">
                {isAgeVisible ? "Hide Age" : "Show Age"}
            </button>
        </div>
    );
};

export default UserProfile;
