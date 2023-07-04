import React, { useState } from "react";

function EditObj() {
	const [numericValue, setNumericValue] = useState("");

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		const numericInput = inputValue.replace(/[^0-9]/g, ""); // Remover caracteres no numéricos
		setNumericValue(numericInput);
	};
	return (
		<div className="container">
			<h1 className="mb-5 mt-5 text-center">
				Version preliminar de edicion de articulos para el catalogo
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
							<div class="input-group mb-3">
								<span class="input-group-text">$</span>
								<input
									type="text"
									class="form-control"
									aria-label="Amount (to the nearest dollar)"
									id="InputPrecio1"
									pattern="[0-9]*"
									inputmode="numeric"
									value={numericValue}
									onChange={handleInputChange}
								/>
								<span class="input-group-text">.00</span>
							</div>
						</div>
						<div class="form-group mb-3">
							<label for="imageInput">Seleccionar imagen:&nbsp;&nbsp;</label>
							<input type="file" class="form-control-file" id="imageInput" />
						</div>
						<div className="form-group mb-3">
							<select class="form-select" aria-label="Default select example">
								<option selected>Selecciona de que categoría es</option>
								<option value="1">Porta Pasaportes</option>
								<option value="2">Camisa personalizada</option>
								<option value="3">Cilindro personalizado</option>
							</select>
						</div>
						<div class="d-flex justify-content-center gap-3">
							<button type="submit" class="btn btn-primary">
								Pre-visualizar
							</button>
							<button type="button" class="btn btn-danger">
								Cancelar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default EditObj;
