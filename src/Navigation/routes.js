import { Navigate, Outlet } from 'react-router-dom';
import Activity from '../pages/activity';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Login from '../pages/login';
import Main from '../pages/Main';
import Register from '../pages/register';

const routes = (authenticated ) => [
    {
        path: "/",
        element: authenticated ? <Main /> : <Navigate to="/login" />,
        children: [
            {
                path: "admin", element: <Home />,

            }
            ,
            {
                path: "admin/activity", element: <Activity />

            }
            ,
            {
                path: "admin/contact", element: <Contact />

            }
            ,
            {
                path: "/", element: <Navigate to="/admin" />

            }
        ],
    },
    {
        path: "/login", element: !authenticated  ? <Login /> : <Navigate to="/admin" />
    },
    {
        path: "/register", element: !authenticated ? <Register /> : <Navigate to="/admin" />
    },
];

export default routes;