import React from 'react';

import { useParams, useLocation } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();
    const location = useLocation();
    return (
        <div>
            <h1>User Details Page.</h1>
            <p> THis the details page of the user {userId}</p>
            <p> LOcation of the state {JSON.stringify(location.state)}</p>
        </div>
    );
};

export default UserDetails;
