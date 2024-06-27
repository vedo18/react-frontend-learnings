import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                console.log(response);
                if (response.status === 200) {
                    setData(response.data);
                    setIsLoading(false);
                    setError(false);
                }
            } catch (error) {
                setIsLoading(false);
                setError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <PostContext.Provider value={{ data, isLoading, error }}>
            {children}
        </PostContext.Provider>
    );
};
