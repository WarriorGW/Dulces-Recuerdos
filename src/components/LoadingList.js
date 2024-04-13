import React from "react";

function LoadingList() {
	return (
		<div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 d-flex justify-content-center mb-5">
			<div className="card" aria-hidden="true">
				<svg
					className="bd-placeholder-img card-img-top"
					width="100%"
					height="180"
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					aria-label="Placeholder"
					preserveAspectRatio="xMidYMid slice"
					focusable="false"
				>
					<title>Placeholder</title>
					<rect width="100%" height="100%" fill="#868e96"></rect>
				</svg>
				<div className="card-body">
					<h5 className="card-title placeholder-glow">
						<span className="placeholder col-6"></span>
					</h5>
					<p className="card-text placeholder-glow">
						<span className="placeholder col-7"></span>
						<span className="placeholder col-4"></span>
						<span className="placeholder col-4"></span>
						<span className="placeholder col-6"></span>
						<span className="placeholder col-8"></span>
					</p>
				</div>
				<div className="card-footer placeholder-glow">
					<span className="placeholder col-4"></span>
				</div>
			</div>
		</div>
	);
}

export default LoadingList;
