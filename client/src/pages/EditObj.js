import React, { useState } from "react";
import AgregarImg from "../components/AgregarImg";

function EditObj() {
	const [numericValue, setNumericValue] = useState("");

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		const numericInput = inputValue.replace(/[^0-9]/g, ""); // Remover caracteres no numéricos
		setNumericValue(numericInput);
	};
	return (
		<div>
			<div>
				<div className="container mt-5 pt-1">
					<div className="row">
						<div className="col-lg-6">
							<div className="d-flex justify-content-center align-items-center">
								<AgregarImg />
							</div>
						</div>
						<div className="col-lg-6 d-flex flex-column">
							<h1 className="text-center mt-3 mb-4">
								<input
									type="text"
									className="form-control"
									id="InputTitle1"
									aria-describedby="emailHelp"
									placeholder="Titulo"
								/>
							</h1>
							<div className="text-center mb-5">
								<textarea
									rows={6}
									className="form-control"
									id="InputDesc1"
									placeholder="Escribe una descripción"
								/>
							</div>
							<select
								className="form-select"
								id="selectInput"
								aria-label="Default select example"
								defaultValue="0"
							>
								<option value="0">Selecciona de que categoría es:</option>
								<option value="1">Porta Pasaportes</option>
								<option value="2">Alcancía</option>
								<option value="3">Cajitas</option>
								<option value="4">Camisas</option>
								<option value="5">Tazas</option>
								<option value="6">Cilindros</option>
							</select>
							<div className="mt-auto d-flex justify-content-between align-items-center">
								<div className="input-group mb-3">
									<span className="input-group-text">Precio: Desde $</span>
									<input
										type="text"
										className="form-control"
										aria-label="Amount (to the nearest dollar)"
										id="InputPrecio1"
										pattern="[0-9]*"
										inputMode="numeric"
										value={numericValue}
										onChange={handleInputChange}
									/>
									<span className="input-group-text">.00</span>
								</div>
							</div>
							<button className="btn btn-person mb-3">Guardar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditObj;
