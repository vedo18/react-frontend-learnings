import { useEffect, useState } from 'react';
import axios from 'axios';
import useDebounce from './useDebounce';

const SearchComponent = () => {
    const [search, setSearch] = useState('');
    const debouncedSearchTerm = useDebounce(search, 500);
    const [result, setResult] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const fetchResult = async (query) => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?title_like=${query}`
            );
            console.log("response",response.data)
            setResult(response.data);
        } catch (error) {
            console.log('error fetching results', error);
        }
    };
    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchResult(debouncedSearchTerm);
        } else {
            setResult([]);
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <input
                type='text'
                value={search}
                placeholder='Search any post'
                onChange={handleSearch}
            />

            <ul>
                {result.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
