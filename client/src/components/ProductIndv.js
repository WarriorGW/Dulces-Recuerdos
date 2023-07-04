import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductIndvStyle.css";

function ProductIndv(props) {
	// Para poder usar AOS
	useEffect(() => {
		AOS.init();
	}, []);

	if (!props.imageNum || !props.titulo || !props.descr || !props.precio) {
		return (
			<div
				className="col-sm-3 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center mb-5"
				data-aos="flip-right"
			>
				<div class="card" style={{ width: "18rem" }}>
					<img
						src={require(`../img/default.png`)}
						class="card-img-top img-fluid"
						alt="..."
						style={{ objectFit: "cover", height: "100%" }}
					/>
					<div class="card-body" style={{ paddingBottom: "1vh" }}>
						<h5 class="card-title">Title</h5>
						<p class="card-text inner-descr">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						{/* <p class="card-footer" style={{ marginBottom: "0px" }}></p> */}
					</div>
					<div className="card-footer">Desde: $0000.00</div>
				</div>
			</div>
		);
	}

	return (
		<div
			className="col-sm-3 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center mb-5"
			data-aos="flip-right"
		>
			<div class="card" style={{ width: "18rem" }}>
				<img
					src={require(`../img/Passport-${props.imageNum}.jpeg`)}
					class="card-img-top img-fluid mx-height"
					alt="..."
					style={{ objectFit: "cover", height: "100%" }}
				/>
				<div class="card-body " style={{ paddingBottom: "1vh" }}>
					<h5 class="card-title inner-tit">{props.titulo}</h5>
					<p class="card-text inner-descr">
						{/* {props.descr} */}
						{props.descr}
					</p>
					{/* <p class="" style={{ marginBottom: "0px" }}></p> */}
				</div>
				<div className="card-footer">Desde: {props.precio}</div>
			</div>
		</div>
	);
}

export default ProductIndv;
