import React from "react";
import "./DetallesStyle.css";

function Detalles() {
	return (
		<div className="container">
			<h1>Aqui estaran los detalles del producto</h1>
			<div className="img-det-container">
				<img
					src={require("../img/Passport-1.jpeg")}
					className="rounded float-start img-fluid"
					alt="../img/Passport-1.jpeg"
				/>
			</div>
		</div>
	);
}

export default Detalles;
