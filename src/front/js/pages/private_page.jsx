import React from "react";
import { useNavigate } from "react-router-dom";

export const PrivatePage = () =>{
    const navigate = useNavigate();
    return(
    <>
    <div class="container bg-dark">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">Private Page</a>
            <button type="button" class="btn btn-danger" onClick={()=>{navigate('/')}}>Cerrar sesión</button>
        </div>
    </nav>
    </div>
    </>
    )
}