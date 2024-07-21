import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div>
            <h1>List of Users Page. Click on any user to see details </h1>
            <nav>
                <Link to='1'> User 1</Link>
                <Link to='2'> User 2</Link>
                <Link to='3'> User 3</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Users;
