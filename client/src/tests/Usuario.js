import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import LoadingTable from "./LoadingTable";

function Usuario() {
	const { users, loadUsers } = useProducts();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		loadUsers().then(() => {
			setIsLoading(false);
		});
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
					{isLoading ? (
						<LoadingTable numRows={10} numCells={5} />
					) : (
						users.map((user) => (
							<tr key={user.id_Usuario}>
								<td>{user.id_Usuario}</td>
								<td>{user.nombre}</td>
								<td>{user.telefono}</td>
								<td>{user.email}</td>
								<td>{user.contrasena}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

export default Usuario;
