import React, { useState } from "react";

function CreatePage() {
	const [numericValue, setNumericValue] = useState("");

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		const numericInput = inputValue.replace(/[^0-9]/g, ""); // Remover caracteres no numéricos
		setNumericValue(numericInput);
	};
	return (
		<div className="container">
			<h1 className="mb-5 mt-5 text-center">
				Version preliminar de creacion de articulos para el catalogo
			</h1>
			<div className="container">
				<div className="row">
					<form>
						<div class="mb-3">
							<label for="InputTitle1" class="form-label">
								Titulo
							</label>
							<input
								type="text"
								class="form-control"
								id="InputTitle1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div class="mb-3">
							<label for="InputDesc1" class="form-label">
								Descripcion
							</label>
							<input type="text" class="form-control" id="InputDesc1" />
						</div>
						<div class="mb-3">
							<label for="InputPrecio1" class="form-label">
								Precio
							</label>
							<input
								type="text"
								class="form-control"
								id="InputPrecio1"
								pattern="[0-9]*"
								inputmode="numeric"
								value={numericValue}
								onChange={handleInputChange}
							/>
						</div>
						<div class="form-group">
							<label for="imageInput">Seleccionar imagen:&nbsp;&nbsp;</label>
							<input type="file" class="form-control-file" id="imageInput" />
						</div>
						<div class="mb-3 form-check"></div>
						<button type="submit" class="btn btn-primary">
							Pre-visualizar
						</button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button type="submit" class="btn btn-danger">
							Cancelar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CreatePage;
