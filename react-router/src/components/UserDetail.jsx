import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();
    const location = useLocation();
    const { id, name, username, image, email } = location.state || {};

    return (
        <div>
            <h1>User Details Page</h1>
            <p>This is the details page of the user {userId}</p>
            {location.state ? (
                <div>
                    <img
                        src={image}
                        alt={name}
                        style={{ width: '150px', height: '150px' }}
                    />
                    <p>ID: {id}</p>
                    <p>Name: {name}</p>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                </div>
            ) : (
                <p>No user details available.</p>
            )}
        </div>
    );
};

export default UserDetails;
