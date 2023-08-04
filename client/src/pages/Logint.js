import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useProducts } from "../context/ProductsContext";
import Swal from "sweetalert2";
import "./css/LogintStyle.css";

function Logint() {
	const navigate = useNavigate();
	const { createUsers, logIn } = useProducts();
	const [user, setUser] = useState({
		nombre: "",
		telefono: "",
		email: "",
		contrasena: "",
	});
	const [oneUser, setOneUser] = useState({
		email: "",
		contrasena: "",
	});
	return (
		<div className="background-login">
			<div className="section">
				<div className="container">
					<div className="row full-height justify-content-center">
						<div className="col-12 text-center align-self-center py-4">
							<div className="section pb-5 pt-5 pt-sm-2 text-center">
								<h6 className="mb-0 pb-3">
									<span>Log In </span>
									<span>Sign Up</span>
								</h6>
								<input
									className="checkbox"
									type="checkbox"
									id="reg-log"
									name="reg-log"
								/>
								<label htmlFor="reg-log"></label>
								<div className="card-3d-wrap mx-auto">
									<div className="card-3d-wrapper">
										<div className="card-front">
											<div className="center-wrap">
												<div className="section text-center">
													{/* Aqui esta el formulario de inicio de sesion */}
													<Formik
														initialValues={oneUser}
														onSubmit={async (values, actions) => {
															setOneUser(values);
															console.log(values);
															const response = await logIn(values);
															// setUserAuthenticated(response);
															console.log(response);
															if (response.success) {
																Swal.fire({
																	icon: "success",
																	title: "Iniciaste sesion correctamente",
																	showConfirmButton: false,
																	background: "#20232b",
																	color: "#2fb27d",
																	timer: 1500,
																}).then(() => {
																	navigate("/");
																});
															} else {
																Swal.fire({
																	icon: "error",
																	title: "Error al iniciar sesion",
																	text: "Usuario o contraseña incorrecta",
																	confirmButtonText: "Aceptar",
																});
															}
															// console.log(response.user);
															// console.log(userAuthenticated);
														}}
													>
														{({ handleSubmit, handleChange }) => (
															<Form onSubmit={handleSubmit}>
																<h4 className="mb-4 pb-3">Log In</h4>
																<div className="form-group">
																	<input
																		type="email"
																		id="email"
																		name="email"
																		className="form-style"
																		placeholder="Email"
																		onChange={handleChange}
																	/>
																	<i className="input-icon uil uil-at"></i>
																</div>
																<div className="form-group mt-2">
																	<input
																		type="password"
																		id="contrasena"
																		name="contrasena"
																		className="form-style"
																		placeholder="Contraseña"
																		onChange={handleChange}
																	/>
																	<i className="input-icon uil uil-lock-alt"></i>
																</div>
																<button
																	type="submit"
																	className="btn mt-4 btn-logsign"
																>
																	Log-In
																</button>
																<p className="mb-0 mt-4 text-center">
																	<a href="/" className="link">
																		Olvidaste tu contraseña?
																	</a>
																</p>
															</Form>
														)}
													</Formik>
												</div>
											</div>
										</div>
										<div className="card-back">
											<div className="center-wrap">
												<div className="section text-center">
													{/* Este es el formulario para el registro del usuario */}
													<Formik
														initialValues={user}
														enableReinitialize={true}
														onSubmit={async (values, actions) => {
															setUser(values);
															console.log(values);
															await createUsers(values);
															actions.resetForm();
															Swal.fire({
																icon: "success",
																title: "Registro exitoso",
																showConfirmButton: false,
																timer: 1500,
																background: "#20232b",
																color: "#2fb27d",
																// confirmButtonColor: "#1aa16a",
															});
														}}
													>
														{({
															handleChange,
															handleSubmit,
															handleBlur,
															values,
															errors,
															touched,
															isSubmitting,
														}) => (
															<Form onSubmit={handleSubmit}>
																<h4 className="mb-3 pb-3">Sign Up</h4>
																<div className="form-group">
																	<input
																		type="text"
																		className="form-style"
																		placeholder="Nombre"
																		name="nombre"
																		value={values.nombre}
																		onChange={handleChange}
																	/>
																	<i className="input-icon uil uil-user"></i>
																</div>
																<div className="form-group mt-2">
																	<input
																		type="tel"
																		className="form-style"
																		placeholder="Numero de Telefono"
																		name="telefono"
																		minLength={10}
																		maxLength={10}
																		value={values.telefono}
																		onChange={handleChange}
																	/>
																	<i className="input-icon uil uil-phone"></i>
																</div>
																<div className="form-group mt-2">
																	<input
																		type="email"
																		className="form-style"
																		placeholder="Email"
																		name="email"
																		value={values.email}
																		onChange={handleChange}
																	/>
																	<i className="input-icon uil uil-at"></i>
																</div>
																<div className="form-group mt-2">
																	<input
																		type="password"
																		className="form-style"
																		placeholder="Contraseña"
																		name="contrasena"
																		value={values.contrasena}
																		onChange={handleChange}
																	/>
																	<i className="input-icon uil uil-lock-alt"></i>
																</div>
																<button
																	type="submit"
																	className="btn mt-4 btn-logsign"
																	name="send"
																	disabled={isSubmitting}
																>
																	Registrarse
																</button>
															</Form>
														)}
													</Formik>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Logint;
