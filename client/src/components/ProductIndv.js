import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductIndvStyle.css";

function ProductIndv(props) {
	// Para poder usar AOS
	useEffect(() => {
		AOS.init();
	}, []);

	if (!props.imgUrl || !props.titulo || !props.descr || !props.precio) {
		return (
			<div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 d-flex justify-content-center mb-5">
				<div
					className="card animate__animated animate__pulse"
					style={{ width: "18rem" }}
				>
					<img
						src={require(`../img/default.png`)}
						className="card-img-top img-fluid"
						alt="..."
						style={{ objectFit: "cover", height: "100%" }}
					/>
					<div className="card-body" style={{ paddingBottom: "1vh" }}>
						<h5 className="card-title">Title</h5>
						<p className="card-text inner-descr">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</div>
					<div className="card-footer">Desde: $0000.00</div>
				</div>
			</div>
		);
	}

	return (
		<div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 d-flex justify-content-center mb-responsive card-container-c">
			<Link
				className="card card-link"
				style={{ width: "18rem" }}
				to={`/Detalles/${props.idLink}`}
			>
				<img
					src={props.imgUrl}
					className="card-img-top img-fluid mx-height"
					alt="..."
					style={{ objectFit: "cover", height: "100%" }}
					draggable={false}
				/>
				<div className="card-body " style={{ paddingBottom: "1vh" }}>
					<h5 className="card-title inner-tit">{props.titulo}</h5>
					<p className="card-text inner-descr">{props.descr}</p>
				</div>
				<div className="card-footer">Desde: ${props.precio}</div>
			</Link>
		</div>
	);
}

export default ProductIndv;
