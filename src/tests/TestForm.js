import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function TestForm() {
	const [file, setFile] = useState("");

	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append("imagenSubida", file);

			const tabla = "image";
			let response = await axios.post(
				`http://192.168.1.67:4000/images/${tabla}`,
				formData
			);
			Swal.fire(
				response.data.err
					? {
							icon: "error",
							title: response.data.err,
							showConfirmButton: false,
							background: "#20232b",
							color: "#2fb27d",
							timer: 1500,
					  }
					: {
							icon: "success",
							title: response.data.msg,
							showConfirmButton: false,
							background: "#20232b",
							color: "#2fb27d",
							timer: 1500,
					  }
			);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<input
				type="file"
				placeholder="Ingresar imagen"
				onChange={(e) => setFile(e.target.files[0])}
			></input>
			<button type="submit" onClick={upload}>
				Enviar
			</button>
		</>
	);
}

export default TestForm;
