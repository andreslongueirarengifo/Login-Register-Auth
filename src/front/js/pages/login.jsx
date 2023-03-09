import React from "react";
import { FormLogin } from "../component/form_login.jsx";


export const Login = () => {
    const navigate = useNavigate();
    return(
        <>
        <h2>Login</h2>
        <FormLogin></FormLogin>
        <button type="button" class="btn btn-light" onClick={}>
            registrar usuario
        </button>
        </>
    )
}