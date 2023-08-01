import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

function Productos() {
	const navigate = useNavigate();
	const { products, loadProducts } = useProducts();

	useEffect(() => {
		loadProducts();
	}, [loadProducts]);

	return (
		<div className="container text-center align-content-center">
			<h1>Productos</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
						<th>Descripción</th>
						<th>Precio</th>
						<th>Categoría</th>
						<th>Editar</th>
						<th>Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.nombre}</td>
							<td>{product.descripcion}</td>
							<td>{product.precio}</td>
							<td>{product.categoria}</td>
							<td>
								<button
									className="btn btn-outline-primary"
									onClick={() => navigate(`/Editar/${product.id}`)}
								>
									Editar
								</button>
							</td>
							<td>
								<button className="btn btn-outline-danger">Borrar</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Productos;
