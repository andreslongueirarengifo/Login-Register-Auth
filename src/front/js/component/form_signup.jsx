import React from "react";

export const FormSignup = () => {
  return (
    <>
    <div className="w-25">
    <div className="row">
	    <div className="col">
		    <label htmlFor="name" className="form-label">
				Nombre *
			</label>
		    <input type="text" id="name" className="form-control" aria-label="Nombre" />
			</div>

			<div className="col">
				<label htmlFor="lastname" className="form-label">
					Apellidos *
				</label>
									<input
										type="text"
										id="lastname"
										className="form-control"
										aria-label="Apellidos"
									/>
								</div>
	</div>
    <div className="row py-3">
								<div className="col">
									<label htmlFor="email" className="form-label">
										Email *
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
										Contraseña *
									</label>
									<input
										type="password"
										id="password"
										className="form-control"
										aria-label="Contraseña"
									/>
								</div>
								<div className="col">
									<label htmlFor="passwordRepeat" className="form-label">
										Confirmar contraseña *
									</label>
									<input
										type="password"
										id="passwordRepeat"
										className="form-control"
										aria-label="Confirmar contraseña"
									/>
								</div>
	</div>
    <button type="button" class="btn btn-light">Registrar</button>
	</div>
    </>
    );
};
