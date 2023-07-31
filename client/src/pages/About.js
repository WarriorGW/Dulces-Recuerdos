import React from "react";

function About() {
	return (
		<div>
			<h1>About</h1>
			<h1>
				<img src={require("../assets/sm-wa.png")} alt="WhatsApp" />
				WhatsApp
			</h1>
			<h1>
				<img src={require("../assets/sm-ig.png")} alt="Instagram" />
				Instagram
			</h1>
			<h1>
				<img src={require("../assets/sm-fb.png")} alt="Facebook" />
				Facebook
			</h1>
		</div>
	);
}

export default About;
