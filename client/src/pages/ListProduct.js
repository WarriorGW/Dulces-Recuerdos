import React, { useEffect, useState } from "react";
import "./css/ListProductStyle.css";
import CustomCarousel from "../components/CustomCarousel";
import { useProducts } from "../context/ProductsContext";
import ProductIndv from "../components/ProductIndv";
import LoadingList from "../components/LoadingList";

function ListProduct() {
	const { products, loadProducts } = useProducts();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		loadProducts().then(() => {
			setIsLoading(false);
		});
	}, [loadProducts]);

	return (
		<div className="background-general">
			<div className="container">
				<h1 className="mb-0 mt-4 font-from-s animate__animated animate__bounceIn text-center mooh-lah-lah mooh-title">
					Catálogo
				</h1>
				<CustomCarousel />
				<div className="row text-center">
					{/* Lo de aqui son los componentes de la lista de catalogo */}
					{isLoading ? (
						<>
							<LoadingList />
							<LoadingList />
							<LoadingList />
							<LoadingList />
							<LoadingList />
							<LoadingList />
							<LoadingList />
							<LoadingList />
						</> // Muestra el componente de carga mientras isLoading es true
					) : (
						products.map((product) => (
							<ProductIndv
								key={product.id}
								idLink={product.id}
								imgUrl={product.urlImg}
								titulo={product.nombre}
								descr={product.descripcion}
								precio={product.precio}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default ListProduct;
