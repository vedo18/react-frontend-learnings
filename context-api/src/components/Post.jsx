import React, { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';

function ListPost() {
    const { data, loading, error } = useContext(PostContext);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong</p>;
    }

    return (
        <div className='Post'>
            <div className='list-post'>
                {data.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListPost;
