import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();

    const userList = [
        {
            id: 1,
            name: 'John Doe',
            username: 'johndoe',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            email: 'john.doe@example.com',
        },
        {
            id: 2,
            name: 'Jane Smith',
            username: 'janesmith',
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
            email: 'jane.smith@example.com',
        },
        {
            id: 3,
            name: 'Mike Johnson',
            username: 'mikejohnson',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            email: 'mike.johnson@example.com',
        },
        {
            id: 4,
            name: 'Emily Davis',
            username: 'emilydavis',
            image: 'https://randomuser.me/api/portraits/women/4.jpg',
            email: 'emily.davis@example.com',
        },
    ];

    const handleNavigation = (user) => {
        navigate(`/users/${user.id}`, {
            state: {
                id: user.id,
                name: user.name,
                image: user.image,
                email: user.email,
                username: user.username,
            },
        });
    };
    return (
        <div>
            <h1>List of Users Page. Click on any user to see details </h1>
            <nav>
                {userList.map((user) => (
                    <Link
                        key={user.id}
                        to={`/users/${user.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(user);
                        }}
                    >
                        {user.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
};

export default Users;
