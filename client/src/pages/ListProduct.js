import ProductIndv from "../components/ProductIndv";
import React, { useEffect } from "react";
import "./css/ListProductStyle.css";
import CustomCarousel from "../components/CustomCarousel";
import { useProducts } from "../context/ProductsContext";

function ListProduct() {
	const { products, loadProducts } = useProducts();

	useEffect(() => {
		loadProducts();
	}, [loadProducts]);

	return (
		<div className="background-general">
			<div className="container">
				<h1 className="mb-0 mt-4 font-from-s animate__animated animate__bounceIn text-center mooh-lah-lah display-1">
					Catálogo
				</h1>
				<CustomCarousel />
				<div className="row text-center">
					{products.map((product) => (
						<ProductIndv
							key={product.id}
							idLink={product.id}
							imgUrl={product.urlImg}
							titulo={product.nombre}
							descr={product.descripcion}
							precio={product.precio}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default ListProduct;
