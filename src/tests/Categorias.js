import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import LoadingTable from "./LoadingTable";

function Categorias() {
	const { categories, loadCategories } = useProducts();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		loadCategories().then(() => {
			setIsLoading(false);
		});
	}, [loadCategories]);

	return (
		<div className="container text-center align-content-center">
			<h1>Categorias</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th>Categoria</th>
					</tr>
				</thead>
				<tbody>
					{isLoading ? (
						<LoadingTable numRows={5} numCells={2} />
					) : (
						categories.map((category) => (
							<tr key={category.id_Categoria}>
								<td>{category.id_Categoria}</td>
								<td>{category.Categoria}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

export default Categorias;
