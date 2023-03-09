import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import { Login } from "./pages/login.jsx";
import { Register } from "./pages/register.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

    return (
        <div>
            <BrowserRouter>
                    <Routes>
                        <Route element={<Login />} path="/" />
                        <Route element={<Register />} path='/register' /> 
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
