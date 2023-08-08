import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/DetallesStyle.css";
import { useProducts } from "../context/ProductsContext";
import { useParams } from "react-router-dom";

function Detalles() {
	const { getOneProduct, oneProduct } = useProducts();
	const params = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		getOneProduct(params.id);
	}, [getOneProduct]);

	return (
		<div>
			<div className="container mt-5 pt-1">
				<div className="row">
					<div className="col-lg-6">
						<div className="square-image-container d-flex justify-content-center align-items-center">
							<img
								src={oneProduct.urlImg}
								className="img-fluid square-image"
								alt="Producto"
								style={{ maxHeight: "100%", maxWidth: "100%" }}
							/>
						</div>
					</div>
					<div className="col-lg-6 d-flex flex-column">
						<h1 className="text-center mt-3 mb-4">{oneProduct.nombre}</h1>
						<p className="text-center mb-5 description-text">
							{oneProduct.descripcion}
						</p>
						<div className="mt-auto d-flex justify-content-between align-items-center">
							<h2>Precio: Desde ${oneProduct.precio}</h2>
							<button
								className="btn btn-person"
								onClick={() => {
									navigate("/");
									window.location.reload();
								}}
							>
								Volver
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detalles;
