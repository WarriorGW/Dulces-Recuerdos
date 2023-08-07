import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import Swal from "sweetalert2";
import "./css/ProductosStyle.css";

function Productos() {
	const navigate = useNavigate();
	const { products, loadProducts, deleteProducts } = useProducts();

	useEffect(() => {
		loadProducts();
	}, [loadProducts]);

	return (
		<div className="container text-center align-content-center">
			<div className="col-lg-12">
				<h1>Productos</h1>
				<table className="table table-striped col-lg-12">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Descripción</th>
							<th>Precio</th>
							<th>Categoría</th>
							<th>Nombre Imagen</th>
							<th className="min-th">Editar</th>
							<th className="min-th">Eliminar</th>
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
								<td>{product.nombreImg}</td>
								<td>
									<button
										className="edit-button"
										onClick={() => navigate(`/Editar/${product.id}`)}
									>
										<svg className="edit-svgIcon" viewBox="0 0 512 512">
											<path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
										</svg>
									</button>
								</td>
								<td>
									<button
										className="delete-button"
										onClick={() => {
											Swal.fire({
												title: "Estas seguro?",
												text: "Esta accion no puede revertirse",
												icon: "warning",
												showCancelButton: true,
												confirmButtonText: "Eliminar",
												cancelButtonText: "Cancelar",
												reverseButtons: true,
												background: "#20232b",
												color: "#2fb27d",
												confirmButtonColor: "#f27474",
											}).then((result) => {
												if (result.isConfirmed) {
													deleteProducts(product.id);
													Swal.fire({
														icon: "success",
														title: "Eliminado",
														text: "El producto se ha eliminado",
														confirmButtonText: "Aceptar",
														background: "#20232b",
														color: "#2fb27d",
														confirmButtonColor: "#1aa16a",
													});
												} else if (
													/* Read more about handling dismissals below */
													result.dismiss === Swal.DismissReason.cancel
												) {
													Swal.fire({
														icon: "error",
														title: "Cancelado",
														text: "El producto no se ha eliminado",
														confirmButtonText: "Aceptar",
														background: "#20232b",
														color: "#2fb27d",
														confirmButtonColor: "#1aa16a",
													});
												}
											});

											loadProducts();
										}}
									>
										<svg className="delete-svgIcon" viewBox="0 0 448 512">
											<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
										</svg>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Productos;
