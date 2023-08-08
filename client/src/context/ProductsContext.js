import { useContext, useState } from "react";
import {
	getOneProductReq,
	getCategoriesReq,
	getProductsReq,
	createProductsReq,
	updateProductsReq,
	deleteProductReq,
} from "../api/products.api";
import {
	getUsersReq,
	createUserReq,
	getOneUserReq,
	logInReq,
} from "../api/users.api";
import { ProductsContext } from "./AllContexts";

export const useProducts = () => {
	const context = useContext(ProductsContext);
	if (!context) {
		throw new Error("useTasks deberia de estar dentro de TaskContextProvider");
	}
	return context;
};

export const ProductsContextProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [oneProduct, setOneProduct] = useState([]);
	const [users, setUsers] = useState([]);
	const [authenticatedUser, setAuthenticatedUser] = useState(null);

	// Aqui estan todas las funciones relacionadas con los productos

	async function loadProducts() {
		const response = await getProductsReq();
		setProducts(response.data);
	}

	const getOneProduct = async (id) => {
		try {
			const response = await getOneProductReq(id);
			setOneProduct(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};

	const createProducts = async (product) => {
		try {
			const response = await createProductsReq(product);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	const updateProducts = async (id, newVal) => {
		try {
			const response = await updateProductsReq(id, newVal);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteProducts = async (id) => {
		try {
			const response = await deleteProductReq(id);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	// Aqui estan todas las funciones relacionadas con las categorias

	const loadCategories = async () => {
		try {
			const response = await getCategoriesReq();
			setCategories(response.data);
		} catch (error) {
			console.error("Error al obtener las categorias:", error);
		}
	};

	// Aqui estan todas las funciones relacionadas con los usuarios

	const loadUsers = async () => {
		try {
			const response = await getUsersReq();
			setUsers(response.data);
		} catch (error) {
			console.error("Error al obtener los usuarios:", error);
		}
	};

	const logIn = async (user) => {
		try {
			const response = await logInReq(user);
			if (response.data.success) {
				// Inicio de sesión exitoso, hacer algo con los datos del usuario
				setAuthenticatedUser(response.data.user);
				console.log(response.data.user);
				console.log("Si jala");
			} else {
				// Inicio de sesión no exitoso, mostrar un mensaje de error
				console.log(response.data.message);
				console.log("Jalant");
			}
			return response.data;
		} catch (error) {
			console.error("Error al obtener los usuarios:", error);
		}
	};

	const getOneUser = async (user) => {
		try {
			const response = await getOneUserReq(user);
			setUsers(response.data);
			console.log(response.data);
		} catch (error) {
			console.error("Error al obtener los usuarios:", error);
		}
	};

	const createUsers = async (newUser) => {
		try {
			const response = await createUserReq(newUser);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ProductsContext.Provider
			value={{
				categories,
				products,
				oneProduct,
				users,
				authenticatedUser,
				loadProducts,
				getOneProduct,
				createProducts,
				updateProducts,
				deleteProducts,
				loadCategories,
				loadUsers,
				logIn,
				getOneUser,
				createUsers,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
