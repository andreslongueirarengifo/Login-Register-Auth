import React from "react";
import { useNavigate } from "react-router-dom";

export const FormLogin = ()=>{
    const navigate = useNavigate();
    return(

        <div className="w-25">
        <div className="row py-3">
                <div className="col">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    className="form-control"
                    aria-label="Email"
                />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label htmlFor="password" className="form-label">
                    Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    aria-label="Contraseña"
                />
                </div>
            </div>
            <button type="button" class="btn btn-light" onClick={()=>{navigate('/private')}}>Iniciar sesion</button>
        </div>

    )
}