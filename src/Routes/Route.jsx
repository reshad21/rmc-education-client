import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admin from "../Pages/Admin/Admin";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            }
        ]
    }
])

export default router;