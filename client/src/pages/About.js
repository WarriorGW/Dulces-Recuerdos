import React from "react";
import "./css/AboutStyle.css";

function About() {
	return (
		<div className="container my-5 d-flex flex-wrap justify-content-center align-content-center">
			<div className="card-group">
				<div className="card">
					<img
						src={require("../assets/sm-wa.png")}
						className="card-img-top"
						alt="WhatsApp"
					/>
					<div className="card-body">
						<h5 className="card-title mx-auto">WhatsApp</h5>
						<a
							href="https://wa.me/4491002699"
							target="_blank"
							rel="noreferrer"
							className="btn btn-success"
						>
							Contactame
						</a>
					</div>
				</div>
				<div className="card">
					<img
						src={require("../assets/sm-fb.png")}
						className="card-img-top"
						alt="Facebook"
					/>
					<div className="card-body">
						<h5 className="card-title">Facebook</h5>
						<a
							href="https://www.facebook.com/Dulces.Recuerdos.Ags"
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
						>
							Contactame
						</a>
					</div>
				</div>
				<div className="card">
					<img
						src={require("../assets/sm-ig.png")}
						className="card-img-top"
						alt="Instagram"
					/>
					<div className="card-body">
						<h5 className="card-title">Instagram</h5>
						<a
							href="https://www.instagram.com/dulcesrecuerdosags/"
							target="_blank"
							rel="noreferrer"
							className="btn btn-purple"
						>
							Contactame
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
