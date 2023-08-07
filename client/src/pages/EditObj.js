import React, { useState, useEffect } from "react";
import AgregarImg from "../components/AgregarImg";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useProducts } from "../context/ProductsContext";
import "./css/EditObjStyle.css";

// Para permitir casi todo en un gmail /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
// Para permitir unicamente letras /^[a-zA-ZÀ-ÿ\s]{1,40}$/

function EditObj() {
	const navigate = useNavigate();
	const params = useParams();
	//* Importar todo esto desde nuestro contexto
	const {
		createProducts,
		updateProducts,
		categories,
		loadCategories,
		getOneProduct,
	} = useProducts();
	const [product, setProduct] = useState({
		nombre: "",
		descripcion: "",
		precio: "",
		Categoria_id_Categoria: "",
	});

	//! A partir de aqui va lo de las imagenes
	const [imagenS, setImagenS] = useState("");
	//! Hasta aqui llega lo de las imagenes
	useEffect(() => {
		const loadProduct = async () => {
			if (params.id) {
				const product = await getOneProduct(params.id);
				setProduct({
					nombre: product.nombre,
					descripcion: product.descripcion,
					precio: product.precio,
					Categoria_id_Categoria: product.id_Categoria,
				});
			}
		};
		loadProduct();
		loadCategories();

		// Contador del text area, con limite de 200
		const mensaje = document.getElementById("descripcion");
		const contador = document.getElementById("contador");
		mensaje.addEventListener("input", function (e) {
			const target = e.target;
			const longitudMax = target.getAttribute("maxlength");
			const longitudAct = target.value.length;
			contador.innerHTML = `${longitudAct}/${longitudMax}`;
		});
	}, [params.id, loadCategories, getOneProduct]);
	return (
		<>
			<Formik
				initialValues={product}
				enableReinitialize={true}
				//? On submit functions
				onSubmit={async (values, actions) => {
					console.log(values);
					if (params.id) {
						// En caso de ser una actualizacion
						await updateProducts(params.id, values);
						navigate("/Productos");
						console.log("Actualizado");
					} else {
						// En caso de ser una creacion
						const formData = new FormData();
						formData.append("nombre", values.nombre);
						formData.append("descripcion", values.descripcion);
						formData.append("precio", values.precio);
						formData.append(
							"Categoria_id_Categoria",
							values.Categoria_id_Categoria
						);
						formData.append("imagenSubida", imagenS);
						console.log("Este es", formData);
						await createProducts(formData);
						//navigate("/Productos");
						console.log("Creado");
					}
					actions.resetForm();
				}}
				// Todas las validaciones de datos para que los datos ingresados sean correctos y puedan ser ingresados en la base de datos
				validate={(valores) => {
					let errores = {};
					// Validacion del nombre
					if (!valores.nombre) {
						errores.nombre = "Ingrese un nombre";
					} else if (!/^[a-zA-ZÀ-ÿ-_-\s]{1,40}$/.test(valores.nombre)) {
						errores.nombre =
							"El nombre solo puede contener letras, espacios o guiones";
					}
					// Validacion de la descripcion
					if (!valores.descripcion) {
						errores.descripcion = "Ingrese una descripción";
					}
					// Validacion del precio
					if (!valores.precio) {
						errores.precio = "Ingrese un precio";
					} else if (!/^[0-9]+$/.test(valores.precio)) {
						errores.precio = "El precio solo puede contener numeros";
					}
					return errores;
				}}
			>
				{({
					handleChange,
					handleSubmit,
					handleBlur,
					setFieldValue,
					values,
					errors,
					touched,
					isSubmitting,
				}) => (
					<Form onSubmit={handleSubmit}>
						<div className="container mt-5 pt-1">
							<div className="row">
								{/* Divisor para saber donde esta la drop zone para subir la imagen */}
								<div className="col-lg-6">
									<div className="d-flex justify-content-center align-items-center">
										<AgregarImg
											changeImg={(e) => {
												//! Codigo de la imagen
												setImagenS(e.target.files[0]);
												//setFieldValue("dataImg", formData);
												//! Fin del codigo de la imagen
											}}
										/>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="col-lg-12 d-flex flex-column h-100">
										{/* Divisor para saber donde esta el input del nombre */}
										<div className="mt-3 mb-4">
											<input
												type="text"
												className="form-control"
												id="nombre"
												name="nombre"
												aria-describedby="emailHelp"
												placeholder="Titulo"
												onChange={handleChange}
												value={values.nombre}
												maxLength={25}
												onBlur={handleBlur}
											/>
											{touched.nombre && errors.nombre && (
												<p className="error">{errors.nombre}</p>
											)}
										</div>
										{/* Divisor para saber donde esta el textarea de la descripcion */}
										<div className="mb-5">
											<textarea
												rows={6}
												className="form-control"
												id="descripcion"
												name="descripcion"
												placeholder="Escribe una descripción"
												onChange={handleChange}
												value={values.descripcion}
												maxLength={200}
												onBlur={handleBlur}
											/>
											<div id="contador">0/200</div>
											{touched.descripcion && errors.descripcion && (
												<p className="error">{errors.descripcion}</p>
											)}
										</div>
										{/* Divisor para saber donde esta el select de las categorias */}
										<select
											className="form-select"
											id="selectInput"
											name="Categoria_id_Categoria"
											aria-label="Default select example"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.Categoria_id_Categoria}
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
										{/* Divisor para saber donde esta el el conjunto de input y labels del precio */}
										<div className="mt-auto mb-3">
											<div className=" d-flex justify-content-between align-items-center">
												<div className="input-group ">
													<span className="input-group-text">
														Precio: Desde $
													</span>
													<input
														type="text"
														className="form-control"
														aria-label="Amount (to the nearest dollar)"
														id="precio"
														name="precio"
														pattern="[0-9]*"
														inputMode="numeric"
														value={values.precio}
														onChange={handleChange}
														maxLength={5}
														onBlur={handleBlur}
													/>
													<span className="input-group-text">.00</span>
												</div>
											</div>
											{touched.precio && errors.precio && (
												<p className="error">{errors.precio}</p>
											)}
										</div>
										{/* Divisor para saber donde esta el boton de enviar el formulario */}
										<button
											type="submit"
											className="btn btn-person mb-3"
											disabled={isSubmitting}
										>
											Guardar
										</button>
									</div>
								</div>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
}

export default EditObj;
