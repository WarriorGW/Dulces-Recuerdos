import React, { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";

function Categorias() {
	const { categories, loadCategories } = useProducts();

	useEffect(() => {
		loadCategories();
	}, [loadCategories]);

	return (
		<div>
			<h1>Categorias</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th>Categoria</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((category) => (
						<tr key={category.id_Categoria}>
							<td>{category.id_Categoria}</td>
							<td>{category.Categoria}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Categorias;
