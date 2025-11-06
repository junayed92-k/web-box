import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "../pages/Error";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/*",
        element: <Error></Error>
    }
])


export default router;