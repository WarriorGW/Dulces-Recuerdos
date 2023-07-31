import React from "react";
import Productos from "./Productos";
import Categorias from "./Categorias";
import Usuario from "./Usuario";

function Tablas() {
	return (
		<div className="container text-center align-content-center">
			<Productos />
			{/* <Categorias />
			<Usuario /> */}
		</div>
	);
}

export default Tablas;
