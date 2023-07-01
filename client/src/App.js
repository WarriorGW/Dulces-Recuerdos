import "./App.css";
//import aos from "aos";
//import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduct from "./components/ListProduct";
import CreatePage from "./components/CreatePage";
import Logint from "./components/Logint";

function App() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Dulces Recuerdos
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Inicio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/CrearNuevo">
									Crear Nuevo
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Otras opciones
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/Logint">
											Login
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							{/* <li className="nav-item">
								<a className="nav-link disabled">Disabled</a>
							</li> */}
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ListProduct />} exact></Route>
					<Route path="/CrearNuevo" element={<CreatePage />} exact></Route>
					<Route path="/Logint" element={<Logint />} exact></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
