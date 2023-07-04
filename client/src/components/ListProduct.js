import ProductIndv from "./ProductIndv";
import React from "react";
import Galeria from "./Galeria";

function ListProduct() {
	return (
		<div className="container">
			<div className="row text-center">
				<h1 className="mb-5 mt-5 font-from-s animate__animated animate__bounceIn">
					Catálogo
				</h1>
				{Galeria.map((imagen) => (
					<ProductIndv
						key={imagen.key}
						imageNum={imagen.num}
						titulo={imagen.titulo}
						descr={imagen.desc}
						precio={imagen.precio}
					/>
				))}
			</div>
		</div>
	);
}

export default ListProduct;
