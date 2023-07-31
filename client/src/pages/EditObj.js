import React, { useState, useEffect } from "react";
import AgregarImg from "../components/AgregarImg";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useProducts } from "../context/ProductsContext";

function EditObj() {
	const navigate = useNavigate();
	const { createProducts, updateProducts, categories, loadCategories } =
		useProducts();
	const { getOneProduct } = useProducts();
	const [numericValue, setNumericValue] = useState("");
	const params = useParams();
	const [product, setProduct] = useState({
		nombre: "",
		descripcion: "",
		precio: "",
		Categoria_id_Categoria: "",
	});

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		const numericInput = inputValue.replace(/[^0-9]/g, "");
		setNumericValue(numericInput);
	};

	useEffect(() => {
		const loadProduct = async () => {
			if (params.id) {
				const product = await getOneProduct(params.id);
				setProduct({
					nombre: product.nombre,
					descripcion: product.descripcion,
					precio: product.precio,
					Categoria_id_Categoria: product.categoria,
				});
			}
		};
		loadProduct();
		loadCategories();

		// Contador del text area, con limite de 200
		const mensaje = document.getElementById("TextAreaDescr");
		const contador = document.getElementById("contador");
		mensaje.addEventListener("input", function (e) {
			const target = e.target;
			const longitudMax = target.getAttribute("maxlength");
			const longitudAct = target.value.length;
			contador.innerHTML = `${longitudAct}/${longitudMax}`;
		});
	}, [params.id, loadCategories, getOneProduct]);
	console.log(params.id);
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
						<div className="col-lg-6">
							{/* <h1>{params.id ? "Editar Producto" : "Nuevo Producto"}</h1> */}
							<Formik
								initialValues={product}
								enableReinitialize={true}
								onSubmit={async (values, actions) => {
									console.log(values);
									if (params.id) {
										await updateProducts(params.id, values);
										navigate("/");
										console.log("Actualizado");
									} else {
										await createProducts(values);
									}
									actions.resetForm();
								}}
							>
								{({ handleChange, handleSubmit, values, isSubmitting }) => (
									<Form
										className="col-lg-12 d-flex flex-column h-100"
										onSubmit={handleSubmit}
									>
										<input
											type="text"
											className="form-control mt-3 mb-4"
											id="InputTitle1"
											name="nombre"
											aria-describedby="emailHelp"
											placeholder="Titulo"
											onChange={handleChange}
											value={values.nombre}
										/>
										<div className="mb-5">
											<textarea
												rows={6}
												className="form-control"
												id="TextAreaDescr"
												name="descripcion"
												placeholder="Escribe una descripción"
												onChange={handleChange}
												value={values.descripcion}
												maxLength={200}
											/>
											<div id="contador">0/200</div>
										</div>
										<select
											className="form-select"
											id="selectInput"
											name="Categoria_id_Categoria"
											aria-label="Default select example"
											defaultValue={values.Categoria_id_Categoria}
											onChange={handleChange}
										>
											<option value="0">Selecciona de que categoría es:</option>
											{categories.map((category) => (
												<option
													value={category.id_Categoria}
													key={category.id_Categoria}
												>
													{category.Categoria}
												</option>
											))}
										</select>
										<div className="mt-auto d-flex justify-content-between align-items-center">
											<div className="input-group mb-3">
												<span className="input-group-text">
													Precio: Desde $
												</span>
												<input
													type="text"
													className="form-control"
													aria-label="Amount (to the nearest dollar)"
													id="InputPrecio1"
													name="precio"
													pattern="[0-9]*"
													inputMode="numeric"
													value={values.precio}
													onChange={handleChange}
													maxLength={10}
												/>
												<span className="input-group-text">.00</span>
											</div>
										</div>
										<button
											type="submit"
											className="btn btn-person mb-3"
											disabled={isSubmitting}
										>
											Guardar
										</button>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditObj;
