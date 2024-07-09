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

    const createPost = async (postData) => {
        try {
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                postData
            );
            console.log('after posting', response.data);
            setData((prev) => [...prev, response.data]);
        } catch (error) {
            console.log('Error while creating post', error);
        }
    };

    return (
        <PostContext.Provider value={{ data, isLoading, error, createPost }}>
            {children}
        </PostContext.Provider>
    );
};
