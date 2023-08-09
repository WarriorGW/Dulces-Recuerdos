import React, { useEffect } from "react";
import "./AgregarImgStyle.css";

function AgregarImg(props) {
	useEffect(() => {
		const dragArea = document.querySelector(".drag-area");
		const dragText = document.querySelector(".drag-header");

		// let button = document.querySelector(".drag-button");
		let button = document.querySelector(".drag-sim-but");
		let inputF = document.querySelector('input[type="file"]');
		let file;

		// Simular que fue click en el de files
		button.onclick = () => {
			inputF.click();
		};

		// Cuando buscas
		const handleFileBrowse = () => {
			file = inputF.files[0];
			dragArea.classList.add("active");
			diplayFile();
		};
		inputF.addEventListener("change", handleFileBrowse);

		// Cuando el archivo este dentro
		const handleDragOver = (event) => {
			event.preventDefault();
			dragText.textContent = "Release to Upload";
			dragArea.classList.add("active");
		};
		dragArea.addEventListener("dragover", handleDragOver);

		// Cuando el archivo se va del drag area
		const handleDragLeave = (event) => {
			dragText.textContent = "Drag & Drop";
			dragArea.classList.remove("active");
		};
		dragArea.addEventListener("dragleave", handleDragLeave);

		// Cuando el archivo se suelta
		const handleDrop = (event) => {
			event.preventDefault();
			file = event.dataTransfer.files[0];
			diplayFile();
		};
		dragArea.addEventListener("drop", handleDrop);

		// Funcion para mostrar los archivos
		function diplayFile() {
			let fileType = file.type;

			let validExten = ["image/jpeg", "image/png", "image/jpg"];

			if (validExten.includes(fileType)) {
				let fileReader = new FileReader();

				fileReader.onload = () => {
					let fileURL = fileReader.result;
					let imgTag = `<img src="${fileURL}" alt="" />`;
					dragArea.innerHTML = imgTag;
				};
				fileReader.readAsDataURL(file);
			} else {
				alert("Invalid file");
				dragArea.classList.remove("active");
			}
		}

		return () => {
			// Clean up the event listener when the component unmounts
			dragArea.removeEventListener("dragover", handleDragOver);
		};
	}, []);

	return (
		<div className="drag-body">
			<div className="cont-img-file">
				<h3 className="text-center">Subir la foto aquí:</h3>
				<div className="drag-area drag-sim-but">
					<div className="drag-icon">
						<i className="fas fa-images"></i>
					</div>
					<span className="drag-header">Drag & Drop</span>
					<span className="drag-header">
						{" "}
						or <span className="drag-button">browse</span>
					</span>
					<input type="file" name="imagen" onChange={props.changeImg} hidden />
					<span className="drag-supports">Supports: JPEG, JPG, PNG</span>
				</div>
			</div>
		</div>
	);
}

export default AgregarImg;
