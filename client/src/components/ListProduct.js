import ProductIndv from "./ProductIndv";
import React from "react";

function ListProduct() {
	return (
		<div className="container">
			<div className="row text-center">
				<h1 className="mb-5 mt-5">Catálogo</h1>
				<ProductIndv imageNum="1" />
				<ProductIndv imageNum="2" />
				<ProductIndv imageNum="3" />
				<ProductIndv imageNum="4" />
				<ProductIndv imageNum="1" />
				<ProductIndv imageNum="2" />
				<ProductIndv imageNum="3" />
				<ProductIndv imageNum="4" />
				<ProductIndv imageNum="1" />
				<ProductIndv imageNum="2" />
				<ProductIndv imageNum="3" />
				<ProductIndv imageNum="4" />
			</div>
		</div>
	);
}

export default ListProduct;
