import React, { useContext, useState } from 'react';
import { PostContext } from '../contexts/PostContext';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { createPost } = useContext(PostContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            title,
            body,
            userId: 7,
        };
        createPost(postData);
        setBody('');
        setTitle('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add New post</h2>
                <div>
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label> Body </label>
                    <input
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddPost;
