import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import UserDetails from './components/UserDetail';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/users'>Users</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/users' element={<Users />}></Route>
                <Route path='/users/:userId' element={<UserDetails />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
