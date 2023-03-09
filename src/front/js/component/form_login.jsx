import React from "react";

export const FormLogin = ()=>{
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
        </div>

    )
}