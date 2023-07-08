import ProductIndv from "./ProductIndv";
import React from "react";
import Galeria from "./Galeria";
import "./ListProductStyle.css";

function ListProduct() {
	return (
		<div className="background-general">
			<div className="container">
				<h1 className="mb-4 mt-4 font-from-s animate__animated animate__bounceIn text-center mooh-lah-lah display-1">
					Catálogo
				</h1>
				<div
					id="carouselExampleIndicators"
					className="carousel slide mb-5 mx-auto d-block"
				>
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="3"
							aria-label="Slide 4"
						></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src={require("../img/carousel-1.jpg")}
								className="d-block w-100"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src={require("../img/carousel-2.jpg")}
								className="d-block w-100"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src={require("../img/carousel-3.jpg")}
								className="d-block w-100"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src={require("../img/carousel-4.jpg")}
								className="d-block w-100"
								alt="..."
							/>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
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
