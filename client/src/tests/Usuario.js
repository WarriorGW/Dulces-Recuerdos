import React, { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";

function Usuario() {
	const { users, loadUsers } = useProducts();

	useEffect(() => {
		loadUsers();
	}, [loadUsers]);

	return (
		<div className="container text-center align-content-center">
			<h1>Usuarios</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th>Nombre</th>
						<th>Telefono</th>
						<th>E-mail</th>
						<th>Contrasena</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id_Usuario}>
							<td>{user.id_Usuario}</td>
							<td>{user.nombre}</td>
							<td>{user.telefono}</td>
							<td>{user.email}</td>
							<td>{user.contrasena}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Usuario;
