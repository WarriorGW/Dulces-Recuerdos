import "./App.css";
//import aos from "aos";
//import axios from "axios";
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import ListProduct from "./pages/ListProduct";
import CreatePage from "./pages/CreatePage";
import EditObj from "./pages/EditObj";
import Detalles from "./pages/Detalles";
import About from "./pages/About";
import Logint from "./pages/Logint";
import Logo from "./assets/dulcesimg-removebg.png";

/*
(default) slash /#/   /#/route
noslash /#   /#route
hashbang /#!/   /#!/route
*/

function App() {
	return (
		<div className="app">
			<HashRouter hashType="slash">
				<nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">
							<img
								src={Logo}
								alt="Logo"
								className="logus"
								draggable="false"
							></img>
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
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item mx-2">
									<Link className="nav-link active" to="/">
										Inicio
									</Link>
								</li>
								<li className="nav-item mx-2">
									<Link className="nav-link" to="/CrearNuevo">
										Crear Nuevo
									</Link>
								</li>
								<li className="nav-item mx-2">
									<Link className="nav-link" to="/Editar">
										Editar articulo
									</Link>
								</li>
								{/* Aqui esta el link de las pruebas, pongo esto para encontrarlo mas facilmente */}
								{/* <li className="nav-item mx-2">
									<Link className="nav-link" to="/Pruebas">
										Pruebas
									</Link>
								</li>
								<li className="nav-item mx-2">
									<Link className="nav-link" to="/Pruebas2">
										Pruebas 2
									</Link>
								</li> */}
								<li className="nav-item dropdown mx-2">
									<Link
										className="nav-link dropdown-toggle"
										to="/"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Otras opciones
									</Link>
									<ul className="dropdown-menu">
										<li>
											<Link className="dropdown-item" to="/">
												Home
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/Logint">
												Login
											</Link>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<Link className="dropdown-item" to="/About">
												About me
											</Link>
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

				<Routes>
					<Route path="/" element={<ListProduct />} exact></Route>
					<Route path="/CrearNuevo" element={<CreatePage />} exact></Route>
					<Route path="/Editar" element={<EditObj />} exact></Route>
					<Route path="/Detalles" element={<Detalles />} exact></Route>
					<Route path="/Logint" element={<Logint />} exact></Route>
					<Route path="/About" element={<About />} exact></Route>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
