import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admin from "../Pages/Admin/Admin";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import CardDetail from './../Pages/CardDetail/CardDetail';
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
                path: '/blogs/:id',
                element: <CardDetail></CardDetail>,
                loader: ({ params }) => fetch(`https://rmc-education-server.vercel.app/blogs/${params.id}`),
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            }
        ]
    }
])

export default router;