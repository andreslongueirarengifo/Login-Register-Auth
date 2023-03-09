import React from "react";
import { FormLogin } from "../component/form_login.jsx";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    return(
        <>
        <h2>Login</h2>
        <FormLogin />
        <button type="button" class="btn btn-light">Iniciar sesion</button>
        <button type="button" class="btn btn-link" onClick={()=>{navigate('/register')}}>
            registrar usuario
        </button>
        </>
    )
}