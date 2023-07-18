import ProductIndv from "../components/ProductIndv";
import React from "react";
import Galeria from "../components/Galeria";
import "./css/ListProductStyle.css";
import CustomCarousel from "../components/CustomCarousel";

function ListProduct() {
	return (
		<div className="background-general">
			<div className="container">
				<h1 className="mb-0 mt-4 font-from-s animate__animated animate__bounceIn text-center mooh-lah-lah display-1">
					Catálogo
				</h1>
				<CustomCarousel />
				<div className="row text-center">
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
		</div>
	);
}

export default ListProduct;
