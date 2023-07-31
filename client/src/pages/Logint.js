import React from "react";
import "./css/LogintStyle.css";

function Logint() {
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
													<h4 className="mb-4 pb-3">Log In</h4>
													<div className="form-group">
														<input
															type="email"
															className="form-style"
															placeholder="Email"
														/>
														<i className="input-icon uil uil-at"></i>
													</div>
													<div className="form-group mt-2">
														<input
															type="password"
															className="form-style"
															placeholder="Contraseña"
														/>
														<i className="input-icon uil uil-lock-alt"></i>
													</div>
													<button className="btn mt-4 btn-logsign">
														Log-In
													</button>
													<p className="mb-0 mt-4 text-center">
														<a href="/" className="link">
															Olvidaste tu contraseña?
														</a>
													</p>
												</div>
											</div>
										</div>
										<div className="card-back">
											<div className="center-wrap">
												<div className="section text-center">
													<form>
														<h4 className="mb-3 pb-3">Sign Up</h4>
														<div className="form-group">
															<input
																type="text"
																className="form-style"
																placeholder="Nombre"
																name="name"
															/>
															<i className="input-icon uil uil-user"></i>
														</div>
														<div className="form-group mt-2">
															<input
																type="tel"
																className="form-style"
																placeholder="Numero de Telefono"
																name="phone"
																minLength={10}
																maxLength={10}
															/>
															<i className="input-icon uil uil-phone"></i>
														</div>
														<div className="form-group mt-2">
															<input
																type="email"
																className="form-style"
																placeholder="Email"
																name="email"
															/>
															<i className="input-icon uil uil-at"></i>
														</div>
														<div className="form-group mt-2">
															<input
																type="password"
																className="form-style"
																placeholder="Contraseña"
																name="pass"
															/>
															<i className="input-icon uil uil-lock-alt"></i>
														</div>
														<button
															type="submit"
															className="btn mt-4 btn-logsign"
															name="send"
														>
															Registrase
														</button>
													</form>
												</div>
												{/* </form> */}
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
