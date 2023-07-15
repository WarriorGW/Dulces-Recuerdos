import React from "react";
import "./DetallesStyle.css";

function Detalles() {
	const productDetails = {
		id: 1,
		title: "Nombre del producto",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tellus erat. Quisque maximus hendrerit lobortis. Proin risus magna, dapibus quis mi a, faucibus euismod quam. Pellentesque mauris arcu, cursus in euismod non, faucibus et neque. Phasellus a dolor at lectus lacinia semper. Donec risus tellus, eleifend sit amet metus vitae, tempus mollis diam. Sed quis ante ipsum. In tempor dapibus urna, et bibendum magna. Mauris a arcu lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, ultrices eget libero sed, bibendum sollicitudin enim. Nulla vel erat tempor, sollicitudin tellus et, bibendum ipsum.",
		price: 99.99,
		image: require("../img/Passport-1.jpeg"),
	};
	return (
		<div>
			{/* <div className="container">
				<h1>Aqui estaran los detalles del producto</h1>
				<div className="img-det-container">
					<img
						src={require("../img/Passport-1.jpeg")}
						className="rounded float-start img-fluid"
						alt="../img/Passport-1.jpeg"
					/>
				</div>
			</div> */}
			<div className="container mt-5 pt-1">
				<div className="row">
					<div className="col-lg-6">
						<div className="square-image-container d-flex justify-content-center align-items-center">
							<img
								src={productDetails.image}
								className="img-fluid square-image"
								alt="Producto"
								style={{ maxHeight: "100%", maxWidth: "100%" }}
							/>
						</div>
					</div>
					<div className="col-lg-6 d-flex flex-column">
						<h1 className="text-center mt-3 mb-4">{productDetails.title}</h1>
						<p className="text-center mb-5 description-text">
							{productDetails.description}
						</p>
						<div className="mt-auto d-flex justify-content-between align-items-center">
							<h2>Precio: Desde ${productDetails.price}</h2>
							<button className="btn btn-person">Volver</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detalles;
