import './App.css';
import ListPost from './components/Post';
import AddPost from './components/AddPost';

function App() {
    return (
        <div className='App'>
            <AddPost></AddPost>
            <ListPost></ListPost>
        </div>
    );
}

export default App;
