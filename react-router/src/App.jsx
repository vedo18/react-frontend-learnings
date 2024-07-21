import React, { Suspense } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Link,
    Outlet,
} from 'react-router-dom';
import DefaultLoader from './components/DefaultLoader';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Users = React.lazy(() => import('./components/Users'));
const UserDetails = React.lazy(() => import('./components/UserDetail'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const Layout = () => (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
        </nav>
        <Outlet />
    </div>
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route
                index
                element={
                    <Suspense fallback={<DefaultLoader />}>
                        <Home />
                    </Suspense>
                }
            />
            <Route
                path='about'
                element={
                    <Suspense fallback={<DefaultLoader />}>
                        <About />
                    </Suspense>
                }
            />
            <Route
                path='users'
                element={
                    <Suspense fallback={<DefaultLoader />}>
                        <Users />
                    </Suspense>
                }
            />
            <Route
                path='users/:userId'
                element={
                    <Suspense fallback={<DefaultLoader />}>
                        <UserDetails />
                    </Suspense>
                }
            />
            <Route
                path='*'
                element={
                    <Suspense fallback={<DefaultLoader />}>
                        <NotFound />
                    </Suspense>
                }
            />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
