import "./App.css";
//import aos from "aos";
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import ListProduct from "./pages/ListProduct";
import CreatePage from "./pages/CreatePage";
import EditObj from "./pages/EditObj";
import Detalles from "./pages/Detalles";
import About from "./pages/About";
import Logint from "./pages/Logint";
import Logo from "./assets/dulcesimg-removebg.png";
import Productos from "./tests/Productos";
import Categorias from "./tests/Categorias";
import Usuario from "./tests/Usuario";
import { ProductsContextProvider } from "./context/ProductsContext";

/*
(default) slash /#/   /#/route
noslash /#   /#route
hashbang /#!/   /#!/route
*/

function App() {
	return (
		<ProductsContextProvider>
			<HashRouter hashType="slash">
				<nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
					<div className="container-fluid">
						<a className="navbar-brand" href="/Dulces-Recuerdos/">
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
									<Link className="nav-link" to="/Creando">
										Crear
									</Link>
								</li>
								{/* En este apartado se pondran los links de las pruebas, pongo esto para encontrarlo mas facilmente */}
								{/* Aqui Finaliza el apartado de los links de las pruebas */}
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
											<Link className="dropdown-item" to="/Logint">
												Login
											</Link>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<Link className="dropdown-item" to="/About">
												Mis redes
											</Link>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<Link className="dropdown-item" to="/Productos">
												Productos
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/Categorias">
												Categorias
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/Usuario">
												Usuarios
											</Link>
										</li>
									</ul>
								</li>
								{/* <li className="nav-item">
								<a className="nav-link disabled">Disabled</a>
							</li> */}
							</ul>
							<ul className="navbar-nav me-5 mb-2 mb-lg-0">
								<li className="nav-item mx-2">
									<Link className="nav-link" to="/Logint">
										<i className="uil uil-user"></i>
										Login
									</Link>
								</li>
							</ul>
							<form className="d-flex" role="search">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Busqueda"
									aria-label="Search"
								/>
								<button className="btn btn-outline-success" type="submit">
									Buscar
								</button>
							</form>
						</div>
					</div>
				</nav>

				<Routes>
					<Route path="/" element={<ListProduct />} exact></Route>
					<Route path="/CrearNuevo" element={<CreatePage />} exact></Route>
					<Route path="/Creando" element={<EditObj />} exact></Route>
					<Route path="/Editar/:id" element={<EditObj />} exact></Route>
					<Route path="/Detalles/:id" element={<Detalles />} exact></Route>
					<Route path="/Logint" element={<Logint />} exact></Route>
					<Route path="/About" element={<About />} exact></Route>
					<Route path="/Productos" element={<Productos />} exact></Route>
					<Route path="/Categorias" element={<Categorias />} exact></Route>
					<Route path="/Usuario" element={<Usuario />} exact></Route>
				</Routes>
			</HashRouter>
		</ProductsContextProvider>
	);
}

export default App;
