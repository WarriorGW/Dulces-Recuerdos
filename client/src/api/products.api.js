import axios from "axios";

// "https://server-dr.vercel.app/"
// "http://localhost:4000"
const BASE_URL_HOME = "https://server-dr.vercel.app";

export const getProductsReq = async () => {
	return await axios.get(`${BASE_URL_HOME}/products`);
};

export const createProductsReq = async (product) => {
	return await axios.post(`${BASE_URL_HOME}/products`, product);
};

export const updateProductsReq = async (id) => {
	return await axios.put(`${BASE_URL_HOME}/products/${id}`);
};

export const getOneProductReq = async (id, newValue) => {
	return await axios.get(`${BASE_URL_HOME}/products/${id}`, newValue);
};

export const getCategoriesReq = async () => {
	return await axios.get(`${BASE_URL_HOME}/categoryRW`);
};

export const getUsersReq = async () => {
	return await axios.get(`${BASE_URL_HOME}/user`);
};
