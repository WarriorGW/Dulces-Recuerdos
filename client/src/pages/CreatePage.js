import React, { useState } from "react";
import "./css/CreatePageStyle.css";

function CreatePage() {
	const [numericValue, setNumericValue] = useState("");

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		const numericInput = inputValue.replace(/[^0-9]/g, ""); // Remover caracteres no numéricos
		setNumericValue(numericInput);
	};
	return (
		<div className="">
			<div className="container">
				<h1 className="mb-5 mt-5 text-center">
					Version preliminar de creacion de articulos para el catalogo
				</h1>
				<div className="container">
					<div className="row">
						<form>
							<div className="mb-3">
								<label for="InputTitle1" className="form-label">
									Titulo
								</label>
								<input
									type="text"
									className="form-control"
									id="InputTitle1"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="mb-3">
								<label for="InputDesc1" className="form-label">
									Descripcion
								</label>
								<input type="text" className="form-control" id="InputDesc1" />
							</div>
							<div className="mb-3">
								<label for="InputPrecio1" className="form-label">
									Precio
								</label>
								<div className="input-group mb-3">
									<span className="input-group-text">$</span>
									<input
										type="text"
										className="form-control"
										aria-label="Amount (to the nearest dollar)"
										id="InputPrecio1"
										pattern="[0-9]*"
										inputmode="numeric"
										value={numericValue}
										onChange={handleInputChange}
									/>
									<span className="input-group-text">.00</span>
								</div>
							</div>
							<div className="form-group mb-3">
								<label for="imageInput" className="mb-2">
									Seleccionar imagen:&nbsp;&nbsp;
								</label>
								<br />
								<input
									type="file"
									className="form-control-file"
									id="imageInput"
								/>
							</div>
							<div className="form-group mb-3">
								<label for="selectInput" className="mb-2">
									Categoría
								</label>
								<select
									className="form-select"
									id="selectInput"
									aria-label="Default select example"
								>
									<option selected>Selecciona de que categoría es</option>
									<option value="1">Porta Pasaportes</option>
									<option value="2">Camisa personalizada</option>
									<option value="3">Cilindro personalizado</option>
								</select>
							</div>
							<div className="d-flex justify-content-center gap-3">
								<button type="submit" className="btn btn-primary">
									Pre-visualizar
								</button>
								<button type="button" className="btn btn-danger">
									Cancelar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePage;
