import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";


const routes = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            }
        ]
    }
])

export default routes;