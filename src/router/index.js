import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import {Navigate} from "react-router";
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {path: '/error', component: <Error/>, exact: true},

    {path: '*', component: <Navigate to="/error"/>, exact: true},
    {path: '/', component: <Navigate to="/posts"/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/error', component: <Error/>, exact: true},

    {path: '*', component: <Navigate to="/login"/>, exact: true},
    {path: '/', component: <Navigate to="/login"/>, exact: true},
]
