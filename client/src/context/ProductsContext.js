import { useContext, useState } from "react";
import {
	getOneProductReq,
	getCategoriesReq,
	getProductsReq,
	getUsersReq,
	createProductsReq,
	updateProductsReq,
} from "../api/products.api";
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
	const [users, setUsers] = useState([]);

	async function loadProducts() {
		const response = await getProductsReq();
		setProducts(response.data);
	}

	const getOneProduct = async (id) => {
		try {
			const response = await getOneProductReq(id);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};

	const loadCategories = async () => {
		try {
			const response = await getCategoriesReq();
			setCategories(response.data);
		} catch (error) {
			console.error("Error al obtener los productos:", error);
		}
	};

	const loadUsers = async () => {
		try {
			const response = await getUsersReq();
			setUsers(response.data);
		} catch (error) {
			console.error("Error al obtener los productos:", error);
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

	return (
		<ProductsContext.Provider
			value={{
				categories,
				products,
				users,
				loadProducts,
				getOneProduct,
				loadCategories,
				loadUsers,
				createProducts,
				updateProducts,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
